<template>
  <div>
    <header class="flex align-center justify-between">
      <h1>This is a different layout!</h1>
      <nav class="flex flex-gap-1">
        <div>
          <router-link to="/">Home</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'about' }">About</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'contact' }">Contact</router-link>
        </div>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
