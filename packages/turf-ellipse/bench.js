const Benchmark = require('benchmark');
const ellipse = require('.');

/**
 * Benchmark Results
 *
 * turf-ellipse - 8 steps x 1,691,641 ops/sec ±1.88% (84 runs sampled)
 * turf-ellipse - 64 steps x 179,814 ops/sec ±2.23% (85 runs sampled)
 * turf-ellipse - 256 steps x 45,268 ops/sec ±2.33% (87 runs sampled)
 *
 */
const suite = new Benchmark.Suite('turf-ellipse');
const center = [ -73.9975, 40.730833 ];
const xRadius = 50;
const yRadius = 10;

suite
    .add('turf-ellipse - 8 steps', () => ellipse(center, xRadius, yRadius, {steps: 8}))
    .add('turf-ellipse - 64 steps', () => ellipse(center, xRadius, yRadius, {steps: 64}))
    .add('turf-ellipse - 256 steps', () => ellipse(center, xRadius, yRadius, {steps: 256}))
    .on('cycle', e => console.log(String(e.target)))
    .on('complete', () => {})
    .run();
