<template>
  <xMenu>
    <xMenuItem label="Hello" icon="heart" :click="Greet" />
    <xMenuItem label="More ...">
      <xMenuItem label="Hello" icon="heart" :click="Greet" />
      <xMenuItem label="Hello" icon="heart" click="Greet" />
      <xMenuSeperator />></xSeperate>
      <xMenuItem label="Hello" icon="heart" @click="Confirm.open" />
    </xMenuItem>
  </xMenu>
</template>

