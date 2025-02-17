import { Avatar, AvatarGroup, Button, Flex, Link, Paper, Text } from '@pillar-ui/core'
import React from 'react'

export const CardSocialRtl = () => {
  return (
    <Paper background="B1" as="article" dir="rtl" border p="4" corner="3" flow="4">
      <Flex items="center" justify="between" gap="3">
        <Flex gap="4">
          <Avatar color="b" variant="dashed" />
          <div>
            <Text>حمزة ميلود عمار</Text>
            <Text color="b" low size="3">
              مطور واجهات أمامية
            </Text>
          </div>
        </Flex>
        <Button>تابع</Button>
      </Flex>
      <div>
        <Text color="b" low size="4">
          البرمجة هي فن وعلم. نكتب أوامر للحاسوب لتنفيذ مهام محددة. تُستخدم لبناء التطبيقات، المواقع، وأنظمة التشغيل.
          تتطلب منطقًا وإبداعًا. تفتح البرمجة آفاقًا واسعة في عالم التكنولوجيا.
        </Text>
      </div>
      <Flex gap="2" items="center">
        <AvatarGroup size="1">
          <Avatar src="https://i.pravatar.cc/120?img=1" title="Hamza" />
          <Avatar src="https://i.pravatar.cc/120?img=2" title="Hamza" />
          <Avatar src="https://i.pravatar.cc/120?img=3" title="Hamza" />
          <Avatar src="https://i.pravatar.cc/120?img=4" title="Hamza" />
          <Avatar src="https://i.pravatar.cc/120?img=5" title="Hamza" />
          <Avatar fallback="32+" title="More Viewers" />
        </AvatarGroup>
        <Link size="3" color="b">
          دان و 38 آخرون
        </Link>
      </Flex>
      <Flex gap="3">
        <Button variant="soft" color="b" size="4">
          250 الإعجابات
        </Button>
        <Button variant="soft" color="b" size="4">
          180 المتابعون
        </Button>
      </Flex>
    </Paper>
  )
}
