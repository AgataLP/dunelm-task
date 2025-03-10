# K6-performance-test:

This repository contains the k6 test scripts for testing the RESTful API using k6, a performance testing tool. The purpose of this task is to measure response times, check HTTP status codes, and perform advanced dynamic testing for a REST API.

1. Project Setup
2. Testing Script Overview
3. Running the Test
4. Analysing Results

# Project Setup:
Create a GitHub account: If you don’t already have one, create a GitHub account at GitHub.
Create a new project: Create a new repository on GitHub and clone it to your local machine.
Version control: Use Git to manage the code in this repository. Make sure to commit changes regularly and push to GitHub.
Install k6: Follow the Getting Started Guide for k6 to install k6 on your system.
If You Can't Install k6 Locally: you can run the test script using Docker. 

# Testing Script Overview:
The test script uses k6 and JavaScript to perform the following steps:

1. First API Request:
URL: https://test-api.k6.io/public/crocodiles/
Method: GET
Actions:
Measure the response time of the request.
Verify that the HTTP status code returned is 200.
2. Second API Request:
URL: https://test-api.k6.io/public/crocodiles/{id}/
Method: GET
Actions:
Dynamically generate a random ID for the crocodile.
Use this ID to fetch data for a specific crocodile.
Measure the response time of the request.
Verify that the HTTP status code returned is 200.
3. Additional Testing:
Simulate traffic with different levels of users (VUs). For example, running the test with 10 virtual users (VUs) over 1 minute.
Running the Test

# Run the test:
With k6 installed locally: k6 run test-script.js.
With Docker (if you can't install k6 locally): docker run --rm -i loadimpact/k6 run - < test-script.js.
- View the test results:
Once the test has completed, k6 will output a summary of the performance results in your terminal. You’ll be able to see the response times, request success rates, and more.

# Analysing results:
After running the test, you should analyze the results for the following:

Response Time: Is the API responding in a reasonable time?
HTTP Status Code: Was the expected status code 200 returned for all requests?
Performance under Load: How did the system behave with multiple users?