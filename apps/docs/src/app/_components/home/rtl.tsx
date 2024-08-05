import { Button, Flex, Heading, Text, Grid, Paper, Avatar } from '~/component/core/pillar'
import { FEATURES, USER_DATA } from './data'

function Article({ type = 'en' }: { type?: 'ar' | 'en' }) {
  const { jobTitle, description, followers, fullName, likes } = USER_DATA[type].user
  return (
    <article dir={type === 'ar' ? 'rtl' : 'ltr'} className="user--article l_flow__sm">
      <Flex items="center" justify="between" gap="xs">
        <Flex gap="sm">
          <Avatar variant="dashed" />
          <div>
            <Text>{fullName}</Text>
            <Text color="bg" contrast="low" size="xs">
              {jobTitle}
            </Text>
          </div>
        </Flex>
        <Button> {type === 'ar' ? 'تابع' : 'Follow'}</Button>
      </Flex>
      <div>
        <Text className="article--description" color="bg" contrast="low" size="sm">
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
        <div className="l_flow__lg">
          <div className="l_flow__xs">
            <div>
              <Text size="lg" as="span" color="pri" contrast="low">
                Effortless RTL Experiences:
              </Text>
              <Heading as="h2" size="3xl" transform="uppercase">
                Right-to-Left Support Built Right In
              </Heading>
            </div>

            <Text size="xl" color="bg" contrast="low">
              Our UI library ensures a welcoming experience for users worldwide.
            </Text>
          </div>

          <Grid grid="1fr 1fr" md="1fr" gap="sm" className="feature-list">
            {FEATURES.map(({ id, title, description, icon }) => (
              <Flex key={id} as="li" gap="sm" className="feature--item">
                <span className="feature-icon">{icon}</span>
                <div>
                  <Heading>{title}</Heading>
                  <Text contrast="low" color="bg">
                    {description}
                  </Text>
                </div>
              </Flex>
            ))}
          </Grid>
        </div>

        <svg
          className="direction-item--small"
          stroke="var(--bg-6)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="1.5"
          stroke-width="6.8"
          viewBox="0 0 284 284"
          width="500"
          fill="none"
        >
          <path d="M131 129c13 4 47 19 30 38-18 21-64 8-53-23 4-12 25-15 36-16 32-5 63 2 95 7m-108-6c-27-7-57-1-83 10" />
          <path d="M45 111c0 13-9 27-17 36 18 1 29 5 39 20M234 107c6 11 14 19 23 28-13 4-23 15-30 26" />
        </svg>
      </div>

      <div className="l_flow__sm">
        <Article type="ar" />
        <Article />
      </div>
    </Paper>
  )
}
