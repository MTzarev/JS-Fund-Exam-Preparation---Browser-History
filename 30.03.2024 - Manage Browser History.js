function manageBrowser(obj, arr) {
    const { "Browser Name": BrowserName, "Open Tabs": OpenTabs, "Recently Closed": RecentlyClosed, "Browser Logs": BrowserLogs } = obj;

    for (let action of arr) {
        if (action === 'Clear History and Cache') {
            // Clear the browser history and cache
            obj["Open Tabs"] = [];
            obj["Recently Closed"] = [];
            obj["Browser Logs"] = [];
        } else if (action.startsWith('Open')) {
            const site = action.substring(5);
            obj["Open Tabs"].push(site);
            obj["Browser Logs"].push(action);
        } else if (action.startsWith('Close')) {
            const site = action.substring(6);
            const index = OpenTabs.indexOf(site);
            if (index !== -1) {
                const closedTab = OpenTabs.splice(index, 1)[0];
                obj["Recently Closed"].push(closedTab);
                obj["Browser Logs"].push(action);
            }
        }
    }

    // Output the browser object
    console.log(`${BrowserName}`);
    console.log(`Open Tabs: ${OpenTabs.join(', ')}`);
    console.log(`Recently Closed: ${RecentlyClosed.join(', ')}`);
    console.log(`Browser Logs: ${BrowserLogs.join(', ')}`);
}

manageBrowser({"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
"Recently Closed":["Yahoo","Gmail"],
"Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
["Close Facebook", "Open StackOverFlow", "Open Google"]
);