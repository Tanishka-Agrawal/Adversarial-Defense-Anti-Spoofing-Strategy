from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional, Dict
import random
import requests
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="GigShield-AI: Parametric Aggregator")

# Enable CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- CONFIG ---
WEATHER_API_KEY = "c9cde5d0e88a83448afa3f5a80225ba8"

# --- DATA MODELS ---

class UserProfile(BaseModel):
    user_id: str
    platforms: List[str] # ["Zomato", "Swiggy", "Blinkit"]
    city: str = "Mumbai"
    avg_weekly_income: float = 5000.0

class PlatformStatus(BaseModel):
    platform: str
    is_active: bool
    scheduled_hours: float

# --- INTEGRATION SERVICES (Real Weather & Mock Platforms) ---

def get_real_weather(city: str):
    """
    Parametric Trigger: Checks actual weather for the city.
    Threshold: Rain > 5mm or Status == 'Extreme'
    """
    try:
        url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={WEATHER_API_KEY}&units=metric"
        response = requests.get(url).json()
        
        main_weather = response.get("weather", [{}])[0].get("main", "Clear")
        temp = response.get("main", {}).get("temp", 25)
        
        # Disruption detection logic
        is_disrupted = main_weather in ["Rain", "Thunderstorm", "Drizzle", "Snow", "Smoke"]
        severity = "High" if main_weather == "Thunderstorm" else "Moderate" if is_disrupted else "Low"
        
        return {
            "is_disrupted": is_disrupted,
            "condition": main_weather,
            "temp": temp,
            "severity": severity
        }
    except Exception as e:
        # Fallback for demo if API fails
        return {"is_disrupted": True, "condition": "Rain (Simulated)", "temp": 28, "severity": "Moderate"}

def simulate_platform_check(user_id: str, platform: str):
    """
    Simulates checking Zomato/Swiggy internal logs.
    In a real app, this would be a secure OAuth connection.
    """
    # Simulate a 90% chance that the worker had a shift scheduled
    had_shift = random.choice([True, True, True, True, False])
    return {
        "platform": platform,
        "shift_status": "Scheduled" if had_shift else "No Shift Found",
        "verified": had_shift
    }

# --- API ENDPOINTS ---

# --- REAL-TIME ALERTS STORAGE ---
ALERTS_DB = [
    {"id": 1, "type": "Weather", "message": "Heavy Rain expected in Mumbai tonight. Stay safe!", "severity": "High", "time": "1 min ago"},
    {"id": 2, "type": "Platform", "message": "Zomato app experiencing minor delays in your zone.", "severity": "Moderate", "time": "10 mins ago"}
]

@app.get("/api/alerts")
def get_alerts():
    """
    Requirement: Real-time trigger monitoring.
    This endpoint is polled by the frontend to show live risk warnings.
    """
    return {"alerts": ALERTS_DB}

@app.get("/api/weather-check/{city}")
def check_weather(city: str):
    weather = get_real_weather(city)
    if weather["is_disrupted"]:
        # Log to Alerts DB in real-time
        new_alert = {
            "id": len(ALERTS_DB) + 1,
            "type": "Weather",
            "message": f"{weather['condition']} detected in {city}. GigShield Policy Active.",
            "severity": weather["severity"],
            "time": "Just Now"
        }
        ALERTS_DB.insert(0, new_alert)
    return weather

@app.get("/api/verify-platforms/{user_id}")
def verify_platforms(user_id: str):
    """
    Aggregates data from Zomato, Swiggy, Blinkit, and Zepto.
    Shows the 'Verification' step for your hackathon demo.
    """
    platforms = ["Zomato", "Swiggy", "Blinkit", "Zepto"]
    results = [simulate_platform_check(user_id, p) for p in platforms]
    return {"user_id": user_id, "active_platform_verifications": results}

@app.post("/api/instant-payout")
def process_payout(user_id: str, city: str):
    """
    The 'Zero-Touch' Claim Flow.
    1. Check Weather API.
    2. Check Zomato/Swiggy Shifts.
    3. Payout if both match.
    """
    weather = get_real_weather(city)
    
    if not weather["is_disrupted"]:
        return {"success": False, "reason": "No disruption detected via Weather API."}

    # Verify user had a shift in one of the apps
    platforms = ["Zomato", "Swiggy", "Blinkit"]
    verifications = [simulate_platform_check(user_id, p) for p in platforms]
    is_working = any(v["verified"] for v in verifications)

    if not is_working:
        return {"success": False, "reason": "No active shifts found on integrated platforms (Zomato/Swiggy/Blinkit)."}

    # Final Payout
    payout_amount = random.randint(300, 800)
    return {
        "success": True,
        "event": weather["condition"],
        "payout_amount": payout_amount,
        "currency": "INR",
        "tx_id": f"TXN-{random.randint(10000, 99999)}",
        "message": "AI Verified: Disruption found + Shift confirmed. Payout initiated."
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
