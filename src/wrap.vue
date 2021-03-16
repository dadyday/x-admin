<script>
export default {
  props: {
    each: String,
    all: String,
    replace: String,
  },
  render: function(createElement) {
    var list = []

    if (this.$slots.default) {
      this.$slots.default.forEach((el) => {
        if (this.replace) {
          if (el.tag && el.tag != this.replace) {
            el.tag = this.replace;
          }
        }
        else if (this.each) {
          el = createElement(this.each, {}, [el])
        }
        list.push(el)
      });
    }

    return createElement(this.all ?? 'slot', {}, list)
  }
}

</script>
