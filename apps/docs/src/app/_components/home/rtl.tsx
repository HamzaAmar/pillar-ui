import { Button, Flex, Heading, Text, Grid, Paper, Avatar } from '@pillar-ui/core'
import { FEATURES, strokes, USER_DATA } from './data'
import { SectionHeading } from '~/component/core/sectionHeading'

function Article({ type = 'en' }: { type?: 'ar' | 'en' }) {
  const { jobTitle, description, followers, fullName, likes } = USER_DATA[type].user
  return (
    <article dir={type === 'ar' ? 'rtl' : 'ltr'} className="user--article l_f-sm">
      <Flex items="center" justify="between" gap="xs">
        <Flex gap="sm">
          <Avatar variant="dashed" />
          <div>
            <Text>{fullName}</Text>
            <Text color="bg" low size="xs">
              {jobTitle}
            </Text>
          </div>
        </Flex>
        <Button> {type === 'ar' ? 'تابع' : 'Follow'}</Button>
      </Flex>
      <div>
        <Text className="article--description" color="bg" low size="sm">
          {description}
        </Text>
      </div>
      <Flex gap="md">
        <Text size="sm">
          <Text as="span" weight="medium">
            {likes}
          </Text>{' '}
          {type === 'ar' ? 'الإعجابات' : 'Likes'}
        </Text>
        <Text size="sm">
          <Text as="span" weight="medium">
            {followers}
          </Text>{' '}
          {type === 'ar' ? 'المتابعون' : 'Followers'}
        </Text>
      </Flex>
    </article>
  )
}

export function RTLSupport() {
  return (
    <Paper as={Grid} grid="1.7fr 1fr" lg="1fr" items="center" gap="md" className="section rtl--support">
      <div className="rtl--support--content">
        <div className="l_f-lg">
          <div className="l_f-xs">
            <div>
              <SectionHeading
                subheading="Build Global-Ready React UIs with Pillar UI's"
                heading="Seamless Right to Left Support (Out of the Box!)"
              />
            </div>

            <Text size="xl" color="bg" low>
              Our UI library ensures a welcoming experience for users worldwide.
            </Text>
          </div>

          <Grid grid="1fr 1fr" md="1fr" gap="sm" className="feature-list">
            {FEATURES.map(({ id, title, description, icon }) => (
              <Flex key={id} as="article" gap="sm" className="feature--item">
                <span className="feature-icon">{icon}</span>
                <div>
                  <Text weight="medium" size="md">
                    {title}
                  </Text>
                  <Text low color="bg">
                    {description}
                  </Text>
                </div>
              </Flex>
            ))}
          </Grid>
        </div>

        <svg className="direction-item--small" {...strokes} viewBox="0 0 284 284" width="500" fill="none">
          <path d="M131 129c13 4 47 19 30 38-18 21-64 8-53-23 4-12 25-15 36-16 32-5 63 2 95 7m-108-6c-27-7-57-1-83 10" />
          <path d="M45 111c0 13-9 27-17 36 18 1 29 5 39 20M234 107c6 11 14 19 23 28-13 4-23 15-30 26" />
        </svg>
      </div>

      <div className="l_f-sm">
        <Article type="ar" />
        <Article />
      </div>
    </Paper>
  )
}
