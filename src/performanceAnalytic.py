import os
import re
import matplotlib.pyplot as plt

# Function to extract function names and elapsed times from log lines
def extract_function_and_time(log_file):
    function_times = {}
    with open(log_file, 'r') as file:
        for line in file:
            match = re.search(r'function: <([^>]+)>.*ElapsedTime : (\d+)ms', line) 
            if match:
                function_name = match.group(1)
                elapsed_time = int(match.group(2))
                if function_name in function_times:
                            
                            #Option one
                            
                            #Pick the maximum elapsed time for a function in the whole log file
                            function_times[function_name] = max(function_times[function_name], elapsed_time)  

                            #Option two
                            
                            #Do a cumulative sum of elapsed time for each function 
                            # function_times[function_name] += elapsed_time
                else:
                    function_times[function_name] = elapsed_time
    return function_times

# Function to plot function names against elapsed times
def plot_function_times(function_times):
    function_names = list(function_times.keys())
    elapsed_times = list(function_times.values())

    plt.figure(figsize=(10, 6))
    plt.barh(function_names, elapsed_times, color='#13436d', height=0.6)
    plt.xlabel('Elapsed Time (ms)', fontdict={'fontweight': 'bold', 'color': 'blue'}) 
    plt.ylabel('Payroll functions', fontdict={'fontweight': 'bold', 'color': 'green'}) 
    plt.title('Elapsed Time of functions')
    plt.grid(axis='x')
    plt.tight_layout()
    plt.show()

# Add log file path  
log_file_path = 'PATH'

# Check if the environment variable is set
if log_file_path:
    # Extract function names and elapsed times from log file
    function_times = extract_function_and_time(log_file_path)

    # Plot function names against elapsed times
    plot_function_times(function_times)
else:
    print("Environment variable LOG_FILE_PATH is not set.")
