<template>
  <div class="serie-information">
    <img
      :src="$functions.getImg(serie)"
      alt="serieImg"
      class="serie-information__img"
    />
    <div
      class="serie-information__no-data"
      v-if="!$functions.isNotEmpty(serie)"
    >
      No se pueden visualizar los datos
    </div>
    <div class="serie-information__content" v-if="$functions.isNotEmpty(serie)">
      <div class="serie-information__content__title">{{ getTitle }}</div>
      <div class="serie-information__content__subtitle">
        {{ getPeriodEmission }}
      </div>
      <div class="serie-information__content__subtitle">
        {{ serie.rating ? serie.rating : "Sin valoración" }}
      </div>
      <div class="serie-information__content__text">
        {{ serie.description ? serie.description : "Sin descripción" }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "SerieInformation",
  props: { serie: { type: Object, required: true } },
  setup(props) {
    const getTitle = computed(() => {
      return props.serie.title ? props.serie.title.split(" (")[0] : "";
    });

    const getPeriodEmission = computed(() => {
      let period = props.serie.startYear;

      if (!props.serie.endYear) {
        period += ` - En emisión`;
      } else if (props.serie.endYear !== props.serie.startYear) {
        period += ` - ${props.serie.endYear}`;
      }

      return period;
    });

    return { getTitle, getPeriodEmission };
  },
};
</script>

<style lang="scss" scoped>
.serie-information {
  min-height: 500px;
  width: 500px;
  background-color: $white;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  box-shadow: 0px 0px 35px -9px $black-shadows;
  border-radius: 20px;

  &__img {
    height: 300px;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  &__no-data {
    font-size: 1.2em;
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding: 20px;
    min-height: 200px;
    justify-content: center;
    align-items: center;

    &__title {
      font-size: 1.4em;
      font-weight: bold;
      margin-bottom: 10px;
    }

    &__subtitle {
      font-size: 1.2em;
      font-weight: bold;
      margin-bottom: 10px;
    }

    &__text {
      font-size: 1.2em;
    }
  }
}

@media (max-width: 600px) {
  .serie-information {
    min-height: 500px;
    width: 400px;
    background-color: $white;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    box-shadow: 0px 0px 35px -9px $black-shadows;
    border-radius: 20px;
  }
}

@media (max-width: 490px) {
  .serie-information {
    min-height: 300px;
    width: 260px;
    background-color: $white;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    box-shadow: 0px 0px 35px -9px $black-shadows;
    border-radius: 20px;

    &__img {
      height: 200px;
    }
  }
}

@media (max-width: 330px) {
  .serie-information {
    min-height: 300px;
    width: 210px;
    background-color: $white;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    box-shadow: 0px 0px 35px -9px $black-shadows;
    border-radius: 20px;

    &__img {
      height: 200px;
    }
  }
}

@media (max-width: 300px) {
  .serie-information {
    min-height: 300px;
    width: 180px;
    background-color: $white;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    box-shadow: 0px 0px 35px -9px $black-shadows;
    border-radius: 20px;

    &__img {
      height: 200px;
    }
  }
}
</style>