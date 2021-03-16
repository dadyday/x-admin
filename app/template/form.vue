<template>
  <xForm>
    <xRow>
      <xSelect name="salutation" width="1*">
        <xOption value="mrs" label="Mrs" />
        <xOption value="ms" label="Ms" />
        <xOption value="mr" label="Mr" />
      </xSelect>
      <xInput name="firstname" label="Firstname" width="2*" />
      <xInput name="surname" label="Surname" width="3*" />
    </xRow>

    <xRow align="right">
      <xButton label="Ok" :click="Save" default />
      <xButton label="Cancel" :click="Close" disabled />
    </xRow>
  </xForm>
</template>

<script>
export default {}
</script>
