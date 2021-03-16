<template>
  <xLayout>
    <xNav label="My very cool Dashboard">
      <router-link to="/">Home</router-link>
      <router-link to="/test">Test</router-link>
      <router-link to="/about">About</router-link>
    </xNav>

    <xContainer>
      <router-view/>
    </xContainer>

  </xLayout>
</template>
