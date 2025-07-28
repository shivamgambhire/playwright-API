@echo off

REM Step 1: Install dependencies
npm ci

REM Step 2: Run Playwright tests
npx playwright test

REM Step 3: Generate Allure Report
npx allure generate ./allure-results --clean -o ./allure-report

REM Step 4: Clone the repo to a temp folder
cd ..
rmdir /S /Q output-repo
git clone https://shivamgambhire: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@github.com/shivamgambhire/playwright-API.git output-repo

REM Step 5: Copy HTML report
xcopy /E /Y /I Run_Playwright_Tests_Daily\allure-report output-repo\test-report

REM Step 6: Push report
cd output-repo
git config user.name "shivamgambhire"
git config user.email "gambhireshm@gmail.com"
git add .
git commit -m "Update Allure test report on %DATE% %TIME%"
git push origin main
