import React, { useState } from 'react';
import {  fetchAdvancedSearchResults } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [repos, setRepos] = useState('');
  
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSearchResults([]);
    try {
      const results = await fetchAdvancedSearchResults(username, location, repos);
      setSearchResults(results.items);
      if (results.total_count === 0) {
        setError("Looks like we can't find the user.");
      }
    } catch {
      setError("Error occurred during search.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">GitHub Advanced User Search</h2>
      <form onSubmit={handleAdvancedSearch} className="space-y-4">
        <input
          type="text"
          placeholder="GitHub Username (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-yellow-300 py-2 rounded">
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center mt-4 text-blue-500">{error}</p>}

      {searchResults.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Search Results:</h3>
          <div className="grid grid-cols-1 gap-4">
            {searchResults.map((user) => (
              <div key={user.id} className="flex items-center p-4 border rounded shadow">
                <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h4 className="text-lg font-bold">{user.login}</h4>

                  <a
  href={user.html_url}
  target="_blank"
  rel="noopener noreferrer"
  className="text-[red]"
>
  View GitHub Profile
</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
