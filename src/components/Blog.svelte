<script>
	export let title = '';
	export let description = '';
	export let link = '';
</script>

<a
	target="_blank"
	href={link}
	class="block border border-darkRose p-6 hover:bg-darkRose hover:text-zinc-900 transition-all duration-300"
>
	<h3 class="text-xl mb-3 font-semibold">
		{title}
	</h3>
	<p>
		{description}
	</p>
</a>
