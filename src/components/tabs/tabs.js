import React, { useState, Children, useEffect, useRef } from 'react';
import { useFirstRender } from '../../hooks';
import { TabsWrapper, Tab, Marker } from './tabs.style';

const Tabs = ({ selectedIndex = 0, children, onChange }) => {
	const [markerData, setMarkerData] = useState({ position: 0, width: 0 });

	const arrChildren = Children.toArray(children).filter(child => {
		const tabChild = child;
		return tabChild.type['displayName'] === 'Tab' && !!tabChild.props.children;
	});

	const refTabs = useRef(null);
	const firstRender = useFirstRender();

	useEffect(() => {
		if (refTabs.current) {
			const selectedTab = refTabs.current.children[selectedIndex];
			setMarkerData({
				position: selectedTab.offsetLeft,
				width: selectedTab.offsetWidth,
				animate: !firstRender
			});
		}
	}, [firstRender, selectedIndex]);

	if (!arrChildren.length) {
		return null;
	}

	const selectedTabContent = arrChildren[selectedIndex];

	return (
		<>
			<TabsWrapper ref={refTabs}>
				{arrChildren.map((child, i) => {
					const tabElement = child;
					const { title } = tabElement.props;

					return (
						<Tab
							className="tab"
							role="tab"
							key={title}
							selected={i === selectedIndex}
							onClick={() => {
								onChange(i);
							}}
						>
							{title}
						</Tab>
					);
				})}
				<Marker {...markerData} />
			</TabsWrapper>
			{selectedTabContent}
		</>
	);
};

export default Tabs;
