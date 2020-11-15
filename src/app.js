import React, { useState } from 'react';
import Marker from './components/marker';
import ToggleTag from './components/toggle-tag';
import Tabs, { Tab } from './components/tabs';

function App() {
	const [toggle, setToggle] = useState(false);
	const [tabs, setTabs] = useState(0);

	return (
		<div>
			<h1>Marker</h1>
			<Marker text="alona ozana alona oz" markText="alona" />
			<h1>Toggle Tag</h1>
			<ToggleTag checked={toggle} onChange={setToggle}>
				Behived
			</ToggleTag>
			<h1>Tabs</h1>
			<Tabs selectedIndex={tabs} onChange={setTabs}>
				<Tab title="Tab 1">
					<h2>Tab 1 Content</h2>
				</Tab>
				<Tab title="Tab 2 very very very long title">
					<h2>Tab 2 Content</h2>
				</Tab>
				<Tab title="Red">
					<div style={{ width: 100, height: 100, backgroundColor: 'red' }}></div>
				</Tab>
			</Tabs>
		</div>
	);
}

export default App;
