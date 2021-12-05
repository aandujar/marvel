<template>
  <div class="notification" id="notification">
    {{ message }}
  </div>
</template>

<script>
import { onMounted, ref, inject } from "vue";

export default {
  name: "Notification",
  setup() {
    const message = ref(null);

    onMounted(() => {
      const emitter = inject("emitter");

      emitter.on("notification", (notification) => {
        message.value =
          typeof notification === "string"
            ? notification
            : "Ha ocurrido un error";

        document
          .getElementById("notification")
          .classList.remove("notification--hidded");
        document
          .getElementById("notification")
          .classList.add("notification--shown");

        setTimeout(() => {
          document
            .getElementById("notification")
            .classList.remove("notification--shown");
          document
            .getElementById("notification")
            .classList.add("notification--hidded");
          setTimeout(() => (message.value = null), 1000);
        }, 6000);
      });
    });

    return { message };
  },
};
</script>


<style lang="scss" scoped>
.notification {
  min-height: 50px;
  width: 200px;
  position: fixed;
  top: 10px;
  left: 120%;
  background-color: $red-background;
  color: $white;
  z-index: 1000;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: pre-wrap;

  @keyframes hide {
    0% {
      left: 85%;
    }
    50% {
      left: 100%;
    }
    100% {
      left: 120%;
    }
  }

  @keyframes show {
    0% {
      left: 120%;
    }
    50% {
      left: 100%;
    }
    100% {
      left: 85%;
    }
  }

  @media (max-width: 1500px) {
    @keyframes hide {
      0% {
        left: 75%;
      }
      50% {
        left: 100%;
      }
      100% {
        left: 120%;
      }
    }

    @keyframes show {
      0% {
        left: 120%;
      }
      50% {
        left: 100%;
      }
      100% {
        left: 75%;
      }
    }
  }

  @media (max-width: 900px) {
    @keyframes hide {
      0% {
        left: 68%;
      }
      50% {
        left: 100%;
      }
      100% {
        left: 120%;
      }
    }

    @keyframes show {
      0% {
        left: 120%;
      }
      50% {
        left: 100%;
      }
      100% {
        left: 68%;
      }
    }
  }

  @media (max-width: 900px) {
    @keyframes hide {
      0% {
        left: 55%;
      }
      50% {
        left: 100%;
      }
      100% {
        left: 120%;
      }
    }

    @keyframes show {
      0% {
        left: 120%;
      }
      50% {
        left: 100%;
      }
      100% {
        left: 55%;
      }
    }
  }

  &--hidded {
    animation-name: hide;
    animation-duration: 2000ms;
    animation-fill-mode: forwards;
  }
  &--shown {
    animation-name: show;
    animation-duration: 2000ms;
    animation-fill-mode: forwards;
  }
}
</style>