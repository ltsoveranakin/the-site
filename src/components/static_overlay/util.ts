const staticEnabledKey = "static_enabled";

function enableStatic() {
	localStorage.setItem(staticEnabledKey, "1");
}

function disableStatic() {
	localStorage.setItem(staticEnabledKey, "0");
}

export function isStaticDisabled() {
	return localStorage.getItem(staticEnabledKey) == "0";
}

if (localStorage.getItem(staticEnabledKey) == null) {
	enableStatic();
}

Object.defineProperty(window, "enableStatic", enableStatic);
Object.defineProperty(window, "disableStatic", disableStatic);
