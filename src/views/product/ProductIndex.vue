<template>
  <div>
    <div id="page-wrap">
      <class class="grid-wrap">
        <ProductItem 
          v-for="product in products"
          :key="product.id"

          :product="product"
        />
      </class>
    </div>
  </div>
</template>

<script>
import { products } from "../../data-seed";
import ProductItem from '../../components/ProductItem'

export default {
  components: {
    ProductItem
  },
  data() {
    return {
      products,
    };
  },
};
</script>

<style scoped>
.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
}

</style>
