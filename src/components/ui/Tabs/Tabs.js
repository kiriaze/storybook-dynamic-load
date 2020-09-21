import React, { useState } from 'react'
import styled from 'styled-components'

const TabGroup = styled.div``

const Tab = styled.button`
	font-size: 1.6rem;
	cursor: pointer;
	opacity: .6;
	border: 0;
	outline: 0;
	background: white;
	padding: 1rem 6rem;
	${props => props.active && `
		opacity: 1;
		border-bottom: .2rem solid black;
	`}
`

const TabContent = styled.div``

export const Tabs = ({ ...props }) => {
	const [active, setActive] = useState(0) // props.data[0].id
	return (
		<TabGroup>
			{props.data.map(item => 
				<Tab 
					key={item.id}
					active={active === item.id}
					onClick={() => setActive(item.id)}>{item.title}</Tab>
			)}
			<TabContent>
				<p>{props.data[active].content}</p>
			</TabContent>
		</TabGroup>
	)
}