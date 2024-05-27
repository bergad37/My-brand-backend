import requests
import json
import matplotlib.pyplot as plt
import pandas as pd

# URL of the JSON file
url = 'https://example.com/channels/example/example/example.json';

# Download the JSON data
response = requests.get(url)
data = response.json()

# Parse the JSON data
channel = data['channel']
feeds = data['feeds']

# Convert feeds data to a DataFrame
df = pd.DataFrame(feeds)

# Convert 'created_at' to datetime
df['created_at'] = pd.to_datetime(df['created_at'])

# Plot the graph of feeds (field1)
plt.figure(figsize=(10, 5))
plt.plot(df['created_at'], df['field1'].astype(float), marker='o', linestyle='-', color='b')
plt.title(f"Field1 (TDS) over Time for Channel {channel['name']}")
plt.xlabel('Time')
plt.ylabel('Field1 (TDS)')
plt.grid(True)
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()