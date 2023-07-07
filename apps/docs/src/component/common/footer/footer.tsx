import React from 'react'
import { Logo } from '..'
import { Text, Grid, Paper, Heading, Flex } from '@pillar/core'
import Link from 'next/link'

const footer = () => {
  return (
    <footer className="l_flow__sm">
      <Paper background="surface-3" as={Grid} p="lg" gap="sm" grid="repeat(4, 1fr)" xs="1fr" lg="1fr 1fr">
        <div>
          <Logo width={100} />
          <Text transform="first-letter-only" color="surface" contrast="low">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tenetur magnam velit debitis a sit, fuga
            libero explicabo blanditiis voluptatem natus porro aut nesciunt corporis placeat facere, neque temporibus.
            Et?
          </Text>
        </div>
        <nav className="l_flow__sm">
          <Heading transform="capitalize">Project</Heading>
          <ul className="l_flow__xs">
            <li>
              <Text transform="capitalize" color="surface" contrast="low" as={Link} className="footer_link" href="#to">
                UI Components
              </Text>
            </li>
            <li>
              <Text transform="capitalize" color="surface" contrast="low" as={Link} className="footer_link" href="#to">
                Icons
              </Text>
            </li>
            <li>
              <Text transform="capitalize" color="surface" contrast="low" as={Link} className="footer_link" href="#to">
                Hooks
              </Text>
            </li>
            <li>
              <Text transform="capitalize" color="surface" contrast="low" as={Link} className="footer_link" href="#to">
                Utils
              </Text>
            </li>
          </ul>
        </nav>
        <nav className="l_flow__sm">
          <Heading transform="capitalize">Community</Heading>

          <ul className="l_flow__xs">
            <li>
              <Text transform="capitalize" color="surface" contrast="low" as={Link} className="footer_link" href="#to">
                Chat on Discord
              </Text>
            </li>
            <li>
              <Text transform="capitalize" color="surface" contrast="low" as={Link} className="footer_link" href="#to">
                Follow on Twitter
              </Text>
            </li>
            <li>
              <Text transform="capitalize" color="surface" contrast="low" as={Link} className="footer_link" href="#to">
                {' '}
                Follow on Github
              </Text>
            </li>
            <li>
              <Text transform="capitalize" color="surface" contrast="low" as={Link} className="footer_link" href="#to">
                GitHub discussions
              </Text>
            </li>
          </ul>
        </nav>
        <nav className="l_flow__sm">
          <Heading transform="capitalize">Help</Heading>

          <ul className="l_flow__xs">
            <li>
              <Text transform="capitalize" color="surface" contrast="low" as={Link} className="footer_link" href="#to">
                Feature
              </Text>
            </li>
            <li>
              <Text transform="capitalize" color="surface" contrast="low" as={Link} className="footer_link" href="#to">
                Report Bugs
              </Text>
            </li>
            <li>
              <Text transform="capitalize" color="surface" contrast="low" as={Link} className="footer_link" href="#to">
                Github Issues
              </Text>
            </li>
            <li>
              <Text transform="capitalize" color="surface" contrast="low" as={Link} className="footer_link" href="#to">
                GitHub discussions
              </Text>
            </li>
          </ul>
        </nav>
      </Paper>
      <Paper className="u_center" p="md">
        Pillar UI · Made by Hamza Miloud Amar
      </Paper>
    </footer>
  )
}

export default footer
