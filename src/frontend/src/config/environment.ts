export const isPreviewMode = () => {
  // Check if running in preview/demo mode
  // This can be determined by environment variables or URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('preview') === 'true' || import.meta.env.VITE_PREVIEW_MODE === 'true';
};

export const getEnvironment = () => {
  return {
    isPreview: isPreviewMode(),
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
  };
};
