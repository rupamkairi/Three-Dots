<script>
const fetchImage = (async () => {
	const response = await fetch('http://localhost:7000/users')
	return await response.json()
})()
</script>

<div id="app">
	<h1>Welcome Three Dots!</h1>
	{#await fetchImage}
	<pre>...waiting</pre>
	{:then data}
	<pre>{data.msg}</pre>
	{:catch error}
	<pre>An error occurred!</pre>
	{/await}
</div>

<style>
	* {
	  box-sizing: border-box;
	}

	body {
	  margin: 0px;
	  padding: 0px;
	}

	#app {
		margin-top: 4rem;
	}
</style>
