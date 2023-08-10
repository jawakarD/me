<script>
	import Blog from '../components/Blog.svelte';

	const posts = [
		{
			link: 'https://web.archive.org/web/20221104185709/https://crypt.codemancers.com/posts/2022-09-28-debugging-frontend/',
			title: 'The Way of the Frontend Debugging',
			description:
				'An attempt to put together some debugging experiences, techniques and tools for frontend'
		},
		{
			link: 'https://crypt.codemancers.com/posts/2022-09-21-polling-redux-saga/',
			title: 'Exploring the power of Redux-Saga by implementing cancellable polling.',
			description:
				'An amazing alternative solution to websockets for somewhat realtime date fetching'
		},
		{
			link: 'https://medium.com/@jawakarsmith/graphql-intro-6c1ecb1babca',
			title: 'A Full Stack Guide to GraphQl 1: GraphQL-Intro',
			description:
				"I'm planning to write GraphQL full stack series, this is the first of many to come, enjoy learning 😄, If you’ve written some javascript…"
		},
		{
			link: 'https://crypt.codemancers.com/posts/2020-03-04-a-full-stack-guide-to-graphql-node_server/',
			title: 'A Full-Stack guide to GraphQL 2: NodeJs Server',
			description:
				'Build a full-blown GraphQL service which will let you query, change and create records in the database'
		},
		{
			link: 'https://crypt.codemancers.com/posts/2020-03-16-a-full-stack-guide-to-graphql-elixir_phoenix_server/',
			title: 'A Full Stack Guide to GraphQl 2.1: Elixir Phoenix Server',
			description:
				"Build a full-blown GraphQL service which will let you query, change and create records in the database using elixir's web framework: Phoenix"
		},
		{
			link: 'https://crypt.codemancers.com/posts/2020-07-15-a-full-stack-guide-to-graphql-react-client/',
			title: 'A Full Stack Guide to GraphQl 3: React Client',
			description: 'Build a React app with graphql'
		},
		{
			link: 'https://medium.com/@jawakarsmith/graphql-intro-6c1ecb1babca',
			title: 'Lazy loading without javascript',
			description:
				'As per HTTPArchive images are the most requested asset type for most websites. Sites request about 2MB of images on the first load which…'
		}
	];
</script>

<svelte:head>
	<title>Jawakar's scribbles</title>
</svelte:head>

<header class="lg:mt-16 lg:mx-32 m-6">
	<h1 class="lg:text-7xl text-4xl mb-12">Jawakar Durai</h1>
	<p class="text-xl mb-6">A curios boy grown into a man and stayed curious</p>
	<section class="flex gap-4">
		<a class="hover:no-underline underline" href="https://www.linkedin.com/in/jawakar-d/"
			>LinkedIn</a
		>
		<a class="hover:no-underline underline" href="https://github.com/jawakarD/">Github</a>
		<a class="hover:no-underline underline" href="mailto:jawakarsmith@gmail.com">Email</a>
		<a class="hover:no-underline underline" href="https://letterboxd.com/shindlerr/">Ltterboxd</a>
	</section>
</header>

<main class="lg:mt-16 lg:mx-32 m-6">
	<section class="mt-8">
		<h2 class="text-2xl">Blogs</h2>
		<div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
			{#each posts as post}
				<Blog link={post.link} title={post.title} description={post.description} />
			{/each}
		</div>
	</section>
</main>
