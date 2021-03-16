<template>
  <div class="home">
    <xForm label="TestForm">
      <xRow>
        <xSelect name="salutation" width="1*">
          <xOption value="mrs" label="Mrs" />
          <xOption value="ms" label="Ms" />
          <xOption value="mr" label="Mr" />
        </xSelect>
        <xInput name="firstname" label="Vorname" hint="zB: Max" width="2*" value="foo"/>
        <xInput name="surname" label="Name" hint="zB: Mustermann" width="3*" />
      </xRow>

      <xRow>
        <xInput name="street" label="Strasse" hint="zB: Lingusterweg 4" />
      </xRow>

      <xRow>
        <xInput name="country" label="Land" hint="zB: DE" width="2rem">
          <xOption value="DE" label="Deutschland" />
          <xOption value="AT" label="Österreich" />
          <xOption value="CH" label="Schweiz" />
        </xInput>
        <xInput name="zip" label="Postleitzahl" hint="zB: 12345" width="5rem" />
        <xInput name="city" label="Ort" hint="zB: Neu-Münster" />
      </xRow>

      <xRow>
      </xRow>

      <xRow align="right">
        <xButton label="Ok" :click="Save" />
        <XButton label="Cancel" :click="Close" />
      </xRow>
    </xForm>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>
