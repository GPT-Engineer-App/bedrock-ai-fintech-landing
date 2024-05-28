import { Container, VStack, Box, Heading, Text, Button, Image, SimpleGrid, Flex } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <Box as="header" textAlign="center" py={10}>
        <Heading as="h1" size="2xl" mb={4}>
          AWS Bedrock Virtual Event with Anthropic
        </Heading>
        <Text fontSize="xl">Empowering Fintech Startups with Generative AI</Text>
      </Box>

      {/* Event Description */}
      <Box as="section" py={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">
          About the Event
        </Heading>
        <Text fontSize="lg" textAlign="center" maxW="container.md" mx="auto">
          Join us for an exclusive virtual event where industry leaders from AWS and Anthropic will discuss the latest advancements in generative AI and how fintech startups can leverage these technologies to innovate and grow.
        </Text>
      </Box>

      {/* Benefits of Attending */}
      <Box as="section" py={10} bg="gray.100">
        <Heading as="h2" size="xl" mb={4} textAlign="center">
          Why Attend?
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} maxW="container.lg" mx="auto">
          <Box textAlign="center">
            <Heading as="h3" size="md" mb={2}>
              Insightful Talks
            </Heading>
            <Text>Learn from the experts about the latest trends and technologies in generative AI.</Text>
          </Box>
          <Box textAlign="center">
            <Heading as="h3" size="md" mb={2}>
              Networking
            </Heading>
            <Text>Connect with other fintech startups and industry leaders.</Text>
          </Box>
          <Box textAlign="center">
            <Heading as="h3" size="md" mb={2}>
              Exclusive Content
            </Heading>
            <Text>Gain access to exclusive content and resources to help you integrate AI into your stack.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Speakers */}
      <Box as="section" py={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">
          Meet the Speakers
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} maxW="container.lg" mx="auto">
          <Box textAlign="center">
            <Image borderRadius="full" boxSize="150px" src="/images/speaker1.jpg" alt="Speaker 1" mx="auto" mb={4} />
            <Heading as="h3" size="md" mb={2}>
              Speaker 1
            </Heading>
            <Text>Expert in AI and Machine Learning</Text>
          </Box>
          <Box textAlign="center">
            <Image borderRadius="full" boxSize="150px" src="/images/speaker2.jpg" alt="Speaker 2" mx="auto" mb={4} />
            <Heading as="h3" size="md" mb={2}>
              Speaker 2
            </Heading>
            <Text>Fintech Innovator</Text>
          </Box>
          <Box textAlign="center">
            <Image borderRadius="full" boxSize="150px" src="/images/speaker3.jpg" alt="Speaker 3" mx="auto" mb={4} />
            <Heading as="h3" size="md" mb={2}>
              Speaker 3
            </Heading>
            <Text>Generative AI Specialist</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Schedule */}
      <Box as="section" py={10} bg="gray.100">
        <Heading as="h2" size="xl" mb={4} textAlign="center">
          Event Schedule
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} maxW="container.lg" mx="auto">
          <Box>
            <Heading as="h3" size="md" mb={2}>
              10:00 AM - Opening Keynote
            </Heading>
            <Text>Introduction to Generative AI by AWS</Text>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={2}>
              11:00 AM - Panel Discussion
            </Heading>
            <Text>Innovations in Fintech with AI</Text>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={2}>
              1:00 PM - Workshop
            </Heading>
            <Text>Hands-on with Generative AI</Text>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={2}>
              3:00 PM - Networking Session
            </Heading>
            <Text>Connect with Peers and Experts</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Registration */}
      <Box as="section" py={10} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>
          Register Now
        </Heading>
        <Text fontSize="lg" mb={6}>
          Don't miss out on this opportunity to learn and connect with the best in the industry.
        </Text>
        <Button colorScheme="blue" size="lg">
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Index;