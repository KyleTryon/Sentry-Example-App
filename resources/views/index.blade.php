<!DOCTYPE html>
<html>
<head>
    <title>Pokémon RPS</title>
    @vite('resources/css/app.css')
</head>
<body class="bg-gray-100 text-center p-10">
    <h1 class="text-3xl font-bold mb-6">Choose Your Starter Pokémon</h1>

    <form action="{{ route('play') }}" method="POST">
        @csrf
        <div class="flex justify-center gap-4 mb-6">
            <button type="submit" name="pokemon" value="bulbasaur" class="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600">
                Bulbasaur
            </button>
            <button type="submit" name="pokemon" value="charmander" class="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600">
                Charmander
            </button>
            <button type="submit" name="pokemon" value="squirtle" class="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
                Squirtle
            </button>
        </div>
    </form>

    @if (session('error'))
        <p class="text-red-600 font-semibold">{{ session('error') }}</p>
    @endif
</body>
</html>