import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text, Link, Badge } from '@chakra-ui/react';
import axios from 'axios';

const RepoDetails = () => {
  const { repoName } = useParams();
  const [repoDetails, setRepoDetails] = useState(null);

  useEffect(() => {
    axios.get(`https://api.github.com/repos/greatgrace24/${repoName}`)
      .then(response => {
        setRepoDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching repo details:', error);
      });
  }, [repoName]);

  if (!repoDetails) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading fontSize="xl">{repoDetails.name}</Heading>
      <Text mt={4}>{repoDetails.description}</Text>
      <Badge mt={4}>{repoDetails.language}</Badge>
      <Box mt={4}>
        <Text>Stars: {repoDetails.stargazers_count}</Text>
        <Text> Forks: {repoDetails.forks_count}</Text>
        <Link href={repoDetails.html_url} isExternal>
          View on GitHub
        </Link>
      </Box>
    </Box>
  );
};

export default RepoDetails;
