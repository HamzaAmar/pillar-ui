import { Heading, Paper, Text } from '@pillar-ui/core'
import React from 'react'
import { Layout } from 'src/component/common'

const troubleshooting = () => {
  return (
    <Layout
      title="Troubleshooting"
      description="Encounter an issue with Pillar UI? Find solutions and guidance to common problems, and get back to smooth development."
    >
      <Paper flow="md" p="sm">
        <Heading size="xl">Troubleshooting</Heading>
        <Text>
          Encountering challenges is a natural part of the development process, and we`&#39;`re here to help you
          navigate through them. This Troubleshooting section aims to provide solutions to some common roadblocks you
          might encounter while integrating and using the Pillar UI library in your React applications.
        </Text>
        <div className="l_flow__sm">
          <Heading as="h2" size="lg">
            Installation Issues
          </Heading>

          <Text>
            <Text weight="medium" as="span">
              Problem:
            </Text>
            Node.js or npm/yarn not installed
          </Text>
          <Text>
            <Text weight="medium" as="span">
              Solution:
            </Text>
            Ensure you have Node.js and npm/yarn installed. You can download them from the
            <a href="https://nodejs.org/">Node.js website</a>.
          </Text>

          <Text>
            <Text weight="medium" as="span">
              Problem:
            </Text>
            Installation fails due to permission errors
          </Text>
          <Text>
            <Text weight="medium" as="span">
              Solution:
            </Text>
            Try running the installation commands with administrative privileges using sudo (for macOS/Linux) or run
            your terminal as an administrator (for Windows).
          </Text>

          <Text>
            <Text weight="medium" as="span">
              Problem:
            </Text>
            Installation hangs or takes too long
          </Text>
          <Text>
            <Text weight="medium" as="span">
              Solution:
            </Text>
            This might be due to network issues or server problems. Try running the installation commands again after a
            while. You can also try using a different package registry by setting the registry URL using
            <code>npm config set registry &lt;registry-url&gt;</code> or
            <code>yarn config set registry &lt;registry-url&gt;</code>.
          </Text>
        </div>

        <div className="l_flow__sm">
          <Heading as="h2" size="lg">
            Styling and Appearance Issues
          </Heading>

          <Text>
            <Text weight="medium" as="span">
              Problem:
            </Text>
            Imported styles not applied to components
          </Text>
          <Text>
            <Text weight="medium" as="span">
              Solution:
            </Text>
            Ensure that you`&apos;`ve imported the Pillar CSS file (<code>@pillar-ui/core/main.css</code>) in the
            correct place, usually at the entry point of your application (e.g., <code>App.js</code>). Check for any
            typos in the import statement.
          </Text>

          <Text>
            <Text weight="medium" as="span">
              Problem:
            </Text>
            Components look different than expected
          </Text>
          <Text>
            <Text weight="medium" as="span">
              Solution:
            </Text>
            Verify your custom theme settings and CSS modifications. Ensure you`&apos;`ve followed the customization
            steps correctly, and there are no typos or syntax errors in your theme file.
          </Text>
        </div>

        <div className="l_flow__sm">
          <Heading as="h2" size="lg">
            Component Integration Issues
          </Heading>

          <Text>
            <Text weight="medium" as="span">
              Problem:
            </Text>
            Components not rendering as expected
          </Text>
          <Text>
            <Text weight="medium" as="span">
              Solution:
            </Text>
            Check your component integration code for errors or missing props. Ensure that you`&apos;`re using the
            correct syntax and props as mentioned in the documentation.
          </Text>

          <Text>
            <Text weight="medium" as="span">
              Problem:
            </Text>
            Component not responsive or misaligned
          </Text>
          <Text>
            <Text weight="medium" as="span">
              Solution:
            </Text>
            Double-check your usage of responsive variables and layout props. Make sure you`&apos;`re using them
            appropriately to create responsive designs.
          </Text>
        </div>

        <div className="l_flow__sm">
          <Heading as="h2" size="lg">
            General Issues
          </Heading>

          <Text>
            <Text weight="medium" as="span">
              Problem:
            </Text>
            Unexpected errors or crashes
          </Text>
          <Text>
            <Text weight="medium" as="span">
              Solution:
            </Text>
            If you encounter unhandled errors or crashes, check your browser`&apos;`s developer console for error
            messages. Ensure your environment is up-to-date and compatible with the library`&apos;`s requirements.
          </Text>

          <Text>
            <Text weight="medium" as="span">
              Problem:
            </Text>
            Performance issues
          </Text>
          <Text>
            <Text weight="medium" as="span">
              Solution:
            </Text>
            If you`&apos;`re experiencing performance problems, review your component usage patterns. Use tools like
            browser development tools to identify potential bottlenecks. Consider optimizing your code or using lazy
            loading where appropriate.
          </Text>
        </div>

        <div className="l_flow__sm">
          <Heading as="h2" size="lg">
            Further Assistance
          </Heading>

          <Text>
            If you`&apos;`re still facing issues after trying the solutions above, consider the following options:
          </Text>

          <Text>
            <Text>FAQ:</Text> Check the <a href="link-to-faq">Frequently Asked Questions</a> section on our website for
            answers to common queries.
          </Text>

          <Text>
            <Text>Community Resources:</Text> Join our community discussions on platforms like
            <a href="https://discord.gg/GvB865nE">Discord</a> or
            <a href="https://github.com/HamzaAmar/pillar-ui/issues">GitHub Issues</a> to seek assistance from fellow
            users and our development team.
          </Text>

          <Text>
            Remember, troubleshooting can differ based on individual projects and setups. These are general
            instructions, so adapt them to suit your users needs and the specifics of your React application.
          </Text>
        </div>
      </Paper>
    </Layout>
  )
}

export default troubleshooting
