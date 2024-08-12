import React from 'react'
import { default as Logo } from '../logo'
import { Text, Grid, Paper, Heading, Code } from '~/component/core/pillar'
import Link from 'next/link'

const footer = () => {
  return (
    <footer>
      <Paper background="bg-3" as={Grid} p="lg" gap="sm" grid="repeat(4, 1fr)" xs="1fr" lg="1fr 1fr">
        <div>
          <Logo width={100} />
          <Text transform="first-letter-only" color="bg" contrast="low">
            Your comprehensive solution for modern web development. Reusable UI components, React hooks, icons, and
            tools designed with accessibility and scalability in mind. Empower your web applications effortlessly
          </Text>
        </div>
        <nav className="l_flow__sm">
          <Text transform="capitalize" size="md" weight="medium">
            Project
          </Text>
          <ul className="footer-list l_flow__xs">
            <li>
              <Text
                transform="capitalize"
                color="bg"
                contrast="low"
                as={Link}
                className="footer_link"
                href="/docs/components"
              >
                UI Components
              </Text>
            </li>
            <li>
              <Text
                transform="capitalize"
                color="bg"
                contrast="low"
                as={Link}
                className="footer_link"
                href="/docs/icons"
              >
                Icons
              </Text>
            </li>
            <li>
              <Text
                transform="capitalize"
                color="bg"
                contrast="low"
                as={Link}
                className="footer_link"
                href="/docs/hooks"
              >
                Hooks
              </Text>
            </li>
            <li>
              <Text
                transform="capitalize"
                color="bg"
                contrast="low"
                as={Link}
                className="footer_link"
                href="/docs/utils"
              >
                Utils
              </Text>
            </li>
          </ul>
        </nav>
        <nav className="l_flow__sm">
          <Text transform="capitalize" size="md" weight="medium">
            Community
          </Text>

          <ul className="footer-list l_flow__xs">
            <li>
              <Text
                transform="capitalize"
                color="bg"
                contrast="low"
                as="a"
                target="_blank"
                className="footer_link"
                href="https://discord.gg/GvB865nE"
              >
                Chat on Discord
              </Text>
            </li>
            <li>
              <Text
                transform="capitalize"
                color="bg"
                contrast="low"
                as="a"
                href="https://twitter.com/pillar_ui"
                target="_blank"
                className="footer_link"
              >
                Follow on Twitter
              </Text>
            </li>
            <li>
              <Text
                transform="capitalize"
                color="bg"
                contrast="low"
                as="a"
                className="footer_link"
                href="https://github.com/HamzaAmar/pillar-ui"
              >
                {' '}
                Follow on Github
              </Text>
            </li>
            <li>
              <Text
                transform="capitalize"
                color="bg"
                contrast="low"
                as="a"
                className="footer_link"
                href="https://github.com/HamzaAmar/pillar-ui/discussions"
              >
                GitHub discussions
              </Text>
            </li>
          </ul>
        </nav>
        <nav className="l_flow__sm">
          <Text transform="capitalize" size="md" weight="medium">
            Help
          </Text>

          <ul className="footer-list l_flow__xs">
            <li>
              <Text
                transform="capitalize"
                color="bg"
                contrast="low"
                as="a"
                className="footer_link"
                href="https://github.com/HamzaAmar/pillar-ui/issues/new?assignees=&labels=&projects=&template=bug-report-for-docs.md&title="
              >
                Feature
              </Text>
            </li>
            <li>
              <Text
                transform="capitalize"
                color="bg"
                contrast="low"
                as="a"
                className="footer_link"
                href="https://github.com/HamzaAmar/pillar-ui/issues/new?assignees=&labels=&projects=&template=feature_request.md&title="
              >
                Report Bugs
              </Text>
            </li>
            <li>
              <Text
                transform="capitalize"
                color="bg"
                contrast="low"
                as="a"
                className="footer_link"
                href="https://github.com/HamzaAmar/pillar-ui/issues"
              >
                Github Issues
              </Text>
            </li>
            <li>
              <Text
                transform="capitalize"
                color="bg"
                contrast="low"
                as="a"
                className="footer_link"
                href="https://github.com/HamzaAmar/pillar-ui/discussions"
              >
                GitHub discussions
              </Text>
            </li>
          </ul>
        </nav>
      </Paper>
      <Paper className="u_center" p="xs">
        Pillar UI · Made by Hamza Miloud Amar
      </Paper>
    </footer>
  )
}

export default footer
