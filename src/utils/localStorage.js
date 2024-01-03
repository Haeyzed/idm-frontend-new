export const getStoredTheme = () => {
  return localStorage.getItem("theme") || "light";
};

export const setStoredTheme = (theme) => {
  localStorage.setItem("theme", theme);
};

export const getStoredCollapseState = () => {
  return localStorage.getItem('sidebarCollapsed') === 'true';
};

export const setStoredCollapseState = (collapsed) => {
  localStorage.setItem('sidebarCollapsed', collapsed);
};
