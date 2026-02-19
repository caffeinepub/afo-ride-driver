# Specification

## Summary
**Goal:** Retry deployment of AFO Ride Driver application, and if deployment fails, generate a preview draft with downloadable application files.

**Planned changes:**
- Attempt deployment with current build configuration
- If deployment fails, generate a functional preview draft without live deployment
- Provide downloadable package containing all source code, assets, and build artifacts
- Include build configuration and deployment instructions in downloadable files

**User-visible outcome:** User can access the deployed application if deployment succeeds, or review a working preview draft and download complete application files for independent deployment if deployment fails.
