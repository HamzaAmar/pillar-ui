import React from 'react'
import { Logo } from '..'
import { Text, Grid, Paper, Heading } from '@pillar/core'
import Link from 'next/link'

const footer = () => {
  return (
    <footer className="l_flow__md">
      <Paper background="surface-3" as={Grid} padding="lg" gap="sm" columns="repeat(4, 1fr)">
        <div>
          <Logo width={100} />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tenetur magnam velit debitis a sit, fuga
            libero explicabo blanditiis voluptatem natus porro aut nesciunt corporis placeat facere, neque temporibus.
            Et?
          </Text>
        </div>
        <nav className="l_flow__md">
          <Heading>Project</Heading>
          <ul>
            <li>
              <Text as={Link} className="footer_link" href="#to">
                UI Components
              </Text>
            </li>
            <li>
              <Text as={Link} className="footer_link" href="#to">
                Icons
              </Text>
            </li>
            <li>
              <Text as={Link} className="footer_link" href="#to">
                Hooks
              </Text>
            </li>
            <li>
              <Text as={Link} className="footer_link" href="#to">
                Utils
              </Text>
            </li>
          </ul>
        </nav>
        <nav className="l_flow__md">
          <Heading>Community</Heading>

          <ul>
            <li>
              <Text as={Link} className="footer_link" href="#to">
                Chat on Discord
              </Text>
            </li>
            <li>
              <Text as={Link} className="footer_link" href="#to">
                Follow on Twitter
              </Text>
            </li>
            <li>
              <Text as={Link} className="footer_link" href="#to">
                {' '}
                Follow on Github
              </Text>
            </li>
            <li>
              <Text as={Link} className="footer_link" href="#to">
                GitHub discussions
              </Text>
            </li>
          </ul>
        </nav>
        <nav className="l_flow__md">
          <Heading>Help</Heading>

          <ul>
            <li>
              <Text as={Link} className="footer_link" color="primary" contrast="low" href="#to">
                Feature
              </Text>
            </li>
            <li>
              <Text as={Link} className="footer_link" color="primary" contrast="low" href="#to">
                Report Bugs
              </Text>
            </li>
            <li>
              <Text as={Link} className="footer_link" color="primary" contrast="low" href="#to">
                Github Issues
              </Text>
            </li>
            <li>
              <Text as={Link} className="footer_link" color="primary" contrast="low" href="#to">
                GitHub discussions
              </Text>
            </li>
          </ul>
        </nav>
      </Paper>
      <Paper className="u_center" padding="md">
        Pillar UI · Made by Hamza Miloud Amar
      </Paper>
    </footer>
  )
}

export default footer
