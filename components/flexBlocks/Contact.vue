<template>
  <client-only>
    <section class="contact-form">
      <div class="content-width">
        <h2 class="contact-form__title">{{ section.form_title }}</h2>
        <form :name="section.form_name" data-netlify="true" data-netlify-honeypot="bot-field">
          <input class="input-small" type="text" name="name" placeholder="name">
          <input class="input-small" type="email" name="email" placeholder="email">
          <!-- <textarea class="input-large" name="message" placeholder="message"></textarea> -->
          <Button
            submit="true"
          >
            {{ section.button.text }}
          </Button>
        </form>
      </div>
    </section>
  </client-only>
</template>

<script>
export default {
  props: [`section`]
}
</script>

<style lang="scss" scoped>
.contact-form {
  padding: 5rem 0;
  margin: 4rem 0;
  background: var(--secondary);

  &__title {
    color: white;
    font-size: 2rem;
    margin: 0 0 2rem 0;
  }

  form {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    input,
    textarea {
      padding: 1rem;
      max-height: 300px;
      background: none;
      border: none;
      border-bottom: solid 2px white;
      color: white;
      font-family: 'Titillium Web', sans-serif;
      font-size: 1.1rem;

      &::placeholder {
        color: rgb(230, 230, 230);
      }
    }

    button {
      font-size: 1.1rem;
      cursor: pointer;
    }

    .input-small {
      width: 100%;
      margin-bottom: 1rem;
    }

    .input-large {
      width: 100%;
      min-width: 100%;
      margin-bottom: 1rem;
    }
  }
}

@media(min-width: 480px) {
  .contact-form form .input-small {
    width: calc(50% - .5rem);
  }
}
</style>