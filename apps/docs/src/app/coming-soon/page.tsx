import React from 'react'
import Link from 'next/link'
import { Button, Flex, Heading, ProgressBar, Text } from '@pillar-ui/core'

export default function ComingSoon() {
  return (
    <Flex style={{ maxWidth: '680px' }} justify="center" direction="col" items="center" gap="6" className="hero">
      <Heading size="9" weight="7">
        Coming Soon: Support Us!
      </Heading>
      <Text low size="6">
        We&lsquo;re working hard to improve this site and bring you more features. You can support us by donating. Stay
        tuned for the donation feature, and thank you for being a part of our journey!
      </Text>
      <ProgressBar label="Progress" value={90} />
      <Button as={Link} href="/">
        Return to Home
      </Button>
    </Flex>
  )
}
