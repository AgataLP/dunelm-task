import http from 'k6/http';
import { check, sleep } from 'k6';

// Load test configuration
export const options = {
    vus: __ENV.VUS || 10, // Default to 10 if no VUS is passed
    duration: __ENV.DURATION || '1m', // Default to 1 minute if no duration is passed
};

export default function () {
    // Step 1: Get all crocodiles
    let res = http.get('https://test-api.k6.io/public/crocodiles/');
    
    // Measure response time & validate status
    check(res, {
        'status is 200': (r) => r.status === 200,
        'response time is acceptable': (r) => r.timings.duration < 500, // Adjust as needed
    });

    // Parse the response to extract crocodile IDs
    let crocodiles = JSON.parse(res.body);
    if (crocodiles.length === 0) {
        console.log('No crocodiles found!');
        return;
    }

    // Select a random crocodile ID
    let randomCroc = crocodiles[Math.floor(Math.random() * crocodiles.length)];
    
    // Step 2: Get details for the selected crocodile
    let res2 = http.get(`https://test-api.k6.io/public/crocodiles/${randomCroc.id}/`);
    
    // Validate response
    check(res2, {
        'status is 200': (r) => r.status === 200,
        'response time is acceptable': (r) => r.timings.duration < 500,
    });

    // Simulate user think time
    sleep(1);
}