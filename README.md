# K6 Performance Test  

This repository contains my k6 test scripts for testing a RESTful API using k6, a performance testing tool. The goal of this task is to measure response times, check HTTP status codes, and perform advanced dynamic testing for a REST API.  

## Task setup 

1. **GitHub Account**: If I don’t already have one, I need to create a GitHub account.  
2. **Repository Setup**: I will create a new repository on GitHub and clone it to my local machine.  
3. **Version Control**: I will use Git to manage my code, commit changes regularly, and push updates to GitHub.  
4. **Install k6**: I will follow the [Getting Started Guide for k6](https://k6.io/docs/get-started/running-k6/) to install k6 on my system.  
5. **Running with Docker**: run k6 docker image.

## Prerequisites
- **Docker**: Version `24.0.2`, build `cb74dfc` (or higher).


## Testing Script Overview  

I have written a test script using k6 and JavaScript that performs the following steps:  

### 1. First API Request  
- **URL**: [https://test-api.k6.io/public/crocodiles/](https://test-api.k6.io/public/crocodiles/)  
- **Method**: `GET`  
- **Actions**:  
  - Measure the response time of the request.  
  - Verify that the HTTP status code returned is `200`.  

### 2. Second API Request  
- **URL**: [https://test-api.k6.io/public/crocodiles/{id}/](https://test-api.k6.io/public/crocodiles/{id}/)  
- **Method**: `GET`  
- **Actions**:  
  - Dynamically generate a random crocodile ID.  
  - Use this ID to fetch data for a specific crocodile.  
  - Measure the response time of the request.  
  - Verify that the HTTP status code returned is `200`.  

### 3. Additional Testing  
- Simulate different traffic levels by adjusting virtual users (VUs).  
- For example, I can run the test with **10 virtual users (VUs) over 1 minute** to evaluate performance.  

## Running the Test in a docker container locally

To run the test, clone the repository and execute the following command from the root directory of the project.

```bash
docker run -v $(pwd):/scripts grafana/k6 run /scripts/script.js
```

By default, the test will run with 10 virtual users (VUS) and a duration of 1 minute. If you'd like to customize these parameters, you can override them using the following command:

```bash
docker run -v $(pwd):/scripts -e VUS=5 -e DURATION='30s' grafana/k6 run /scripts/script.js
```

This command will set the number of virtual users to 5 and extend the test duration to 30 seconds.

## Viewing Test Results

Once the test completes, k6 outputs a summary of the performance results in the terminal. This includes response times, request success rates, and more.

I captured the output in a json file with the following command:
```bash
docker run -v $(pwd):/scripts grafana/k6 run /scripts/script.js >> testOutput.js
```

## Analysing Results

- **High Consistency**: The response time is fairly stable, with only slight variations, as evidenced by the small difference between the average and 90th/95th percentiles.
- **No Failed Requests**: The system performed flawlessly in terms of availability and error-free responses.
- **Latency**: There's a noticeable peak in the maximum latency for some requests (up to 406.84 ms), which might require investigation if this test were to be expanded or if it affects user experience.
- **Throughput**: A throughput of ~15.91 requests per second is sustained, suggesting stable load-handling capabilities under the given conditions.

## Conclusion
The system handled the defined load well, with no errors and consistent response times. However, the high peak response time (406.84 ms) might be a potential point of interest for further optimization, especially if the system needs to scale up.