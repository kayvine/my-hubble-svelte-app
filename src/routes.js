import Home from './routes/Home.svelte';
import Profile from './routes/Profile.svelte';
import Test from './routes/Test.svelte';
import NotFound from './routes/NotFound.svelte';

export default {
  '/profile': Profile,
  // Using named parameters, with last being optional
  '/author/:first/:last?': Test,
  '/': Home,
  '*': NotFound,
}
