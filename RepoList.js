import React, { useState, useEffect } from 'react';
import { fetchRepos } from '../api/github';
import { Box, List, ListItem, Button } from '@chakra-ui/react';

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchRepos(page).then(response => {
      setRepos(response.data);
    });
  }, [page]);

  return (
    <Box>
      <List>
        {repos.map(repo => (
          <ListItem key={repo.id}>{repo.name}</ListItem>
        ))}
      </List>
      <Button onClick={() => setPage(prev => prev + 1)}>Next Page</Button>
    </Box>
  );
};

export default RepoList;
