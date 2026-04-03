import requests
import time
import sys

BACKEND_URL = "http://127.0.0.1:8000"

def simulate_disruption():
    print("🚀 GIGSHIELD LIVE DEMO: STIMULATING EXTERNAL DISRUPTION...")
    time.sleep(1)
    
    # Mock data for the persona
    payload = {
        "user_id": "GIG-USER-001",
        "disruption_event": "Heavy Rainfall (80mm) - Waterlogging in Sector 5",
        "location": "Mumbai, MH"
    }

    try:
        print(f"📡 Sending parametric trigger to backend for {payload['user_id']}...")
        response = requests.post(f"{BACKEND_URL}/api/trigger-claim", params=payload)
        
        if response.status_code == 200:
            result = response.json()
            print("\n✅ SUCCESS: DISRUPTION CONFIRMED BY PARAMETRIC SYSTEM")
            print(f"💰 Payout of ₹{result['claim_details']['payout']} initiated via UPI.")
            print(f"📄 Claim ID: {result['claim_details']['claim_id']}")
            print("\nYour Frontend dashboard will now update with the new payout history.")
        else:
            print(f"❌ Error: {response.text}")
            
    except Exception as e:
        print(f"❌ Could not connect to backend. Is it running on {BACKEND_URL}?")

if __name__ == "__main__":
    simulate_disruption()
