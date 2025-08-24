#!/usr/bin/env node

/**
 * Performance monitoring script for the Bay Area Fencing Club website
 * Checks key performance metrics for page load times and image optimization
 */

const puppeteer = require('puppeteer');

async function measurePagePerformance(url) {
  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });
  
  try {
    const page = await browser.newPage();
    
    // Enable performance monitoring
    await page.coverage.startJSCoverage();
    await page.coverage.startCSSCoverage();
    
    const startTime = Date.now();
    
    // Navigate to page
    await page.goto(url, { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    const loadTime = Date.now() - startTime;
    
    // Get performance metrics
    const metrics = await page.metrics();
    
    // Get image loading statistics
    const imageStats = await page.evaluate(() => {
      const images = document.querySelectorAll('img');
      return {
        totalImages: images.length,
        loadedImages: Array.from(images).filter(img => img.complete && img.naturalHeight !== 0).length
      };
    });
    
    // Get Core Web Vitals
    const webVitals = await page.evaluate(() => {
      return new Promise((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const vitals = {};
          
          entries.forEach((entry) => {
            if (entry.name === 'LCP') {
              vitals.LCP = entry.value;
            }
            if (entry.name === 'FID') {
              vitals.FID = entry.value;
            }
            if (entry.name === 'CLS') {
              vitals.CLS = entry.value;
            }
          });
          
          resolve(vitals);
        }).observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
        
        // Fallback after 5 seconds
        setTimeout(() => resolve({}), 5000);
      });
    });
    
    console.log(`Performance Report for ${url}`);
    console.log('='.repeat(50));
    console.log(`📊 Load Time: ${loadTime}ms`);
    console.log(`🖼️  Images: ${imageStats.loadedImages}/${imageStats.totalImages} loaded`);
    console.log(`📋 Script Evaluation: ${metrics.ScriptEvaluate.toFixed(2)}ms`);
    console.log(`🎨 Style Recalculation: ${metrics.RecalcStyle.toFixed(2)}ms`);
    console.log(`📐 Layout: ${metrics.Layout.toFixed(2)}ms`);
    console.log(`🎭 Paint: ${metrics.Paint.toFixed(2)}ms`);
    
    if (webVitals.LCP) {
      console.log(`⚡ Largest Contentful Paint: ${webVitals.LCP.toFixed(2)}ms`);
    }
    if (webVitals.FID) {
      console.log(`👆 First Input Delay: ${webVitals.FID.toFixed(2)}ms`);
    }
    if (webVitals.CLS) {
      console.log(`📏 Cumulative Layout Shift: ${webVitals.CLS.toFixed(4)}`);
    }
    
  } catch (error) {
    console.error('Error measuring performance:', error.message);
  } finally {
    await browser.close();
  }
}

// Test multiple pages
const pages = [
  'http://localhost:3001',
  'http://localhost:3001/gallery',
  'http://localhost:3001/programs',
  'http://localhost:3001/schedules'
];

async function runPerformanceTests() {
  console.log('🚀 Running performance tests...\n');
  
  for (const url of pages) {
    await measurePagePerformance(url);
    console.log('\n');
  }
  
  console.log('✅ Performance testing complete!');
}

// Check if puppeteer is installed
try {
  require.resolve('puppeteer');
  runPerformanceTests();
} catch (error) {
  console.log('📦 Puppeteer not found. Install it with: npm install puppeteer');
  console.log('📊 Manual testing recommended:');
  console.log('   - Open browser DevTools → Performance tab');
  console.log('   - Record page load and check metrics');
  console.log('   - Verify no "onLoadingComplete" deprecation warnings');
}
