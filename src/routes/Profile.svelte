<script>
  import { onMount } from 'svelte';
  import { user } from '../stores';
  import Option from '../components/Option.svelte';

  let disabled;

  $: userData = $user;
  $: displayName = `${userData.firstName} ${userData.lastName}`;
  $: completeAddress =
    `${userData.street} ${userData.number}${userData.bus ? ' ' + userData.bus : ''} <br/>${userData.postalCode} ${userData.city}`;
  // $: optIn1 =

  let accountName;
  let accountEmail;
  // let accountPassword;
  // let optIn1;

  // let formInvalid = false;

  onMount(() => window.scrollTo(0, 0));

  function disableOthers() {
    // console.log(event.detail.active);
    disabled = !disabled;
  }

  function handleSubmit(event, component) {
    console.log(event);
    console.log('password check', event.target.passwordCheck);
    Object.keys(event.target).forEach(console.log);

    const inValid = event.target.passwordCheck && event.target.passwordCheck !== $user.password;
    if (inValid) {
      // formInvalid = true;
      return;
    }

    user.set({
      ...$user,
      ...(event.target.firstName && { firstName: event.target.firstName.value }),
      ...(event.target.lastName && { lastName: event.target.lastName.value }),
      ...(event.target.email && { email: event.target.email.value }),
      ...(event.target.password && { password: event.target.password.value }),
      street: event.target.street ? event.target.street.value : $user.street,
      number: event.target.number ? event.target.number.value : $user.number,
      bus: event.target.bus ? event.target.bus.value : $user.bus,
      postalCode: event.target.postalCode ? event.target.postalCode.value : $user.postalCode,
      city: event.target.city ? event.target.city.value : $user.city,
      country: event.target.country ? event.target.country.value : $user.country,
      telephone: event.target.telephone ? event.target.telephone.value : $user.telephone,
      contactEmail: event.target.contactEmail ? event.target.contactEmail.value : $user.contactEmail,
    });
    component.show();
    console.log('submitted!');
  }

  function validate(event) {
    const input = event.target;
    console.log(input);
    const validityState = input.validity;

    // if password field, check if correct
    console.log(event);
    console.log(event.target.passwordCheck);

    if (input.passwordCheck && input.passwordCheck !== $user.password) {
      validityState.customError = true;
    }

    console.log(validityState.customError);

    if (validityState.valueMissing) {
      input.setCustomValidity('You gotta fill this out, yo!');
    } else if (validityState.customError) {
      input.setCustomValidity('the password is incorrect!');
    } else {
      input.setCustomValidity('');
    }

    input.reportValidity();
  }
</script>

<div class="flex flex-wrap container py-8">
  <!-- ACCOUNT -->
  <div class="w-full md:w-1/4">
    <div class="pr-4 pb-4">
      <div class="text-3xl font-semibold text-green-400">Account</div>
      <hr class="w-16 border-t-2 border-green-400 my-2">
      <p class="text-gray-600">Manage your account details for My Hubble here.</p>
    </div>
  </div>
  <div class="w-full md:w-3/4 pb-6">
    <div class="card bg-white">
      <Option
          bind:this={accountName}
          icon="person"
          data={displayName}
          {disabled}
          on:showDetail={disableOthers}
      >
        <form
            class="flex flex-wrap w-full md:w-4/5 mx-auto"
            on:submit|preventDefault={(e) => handleSubmit(e, accountName)}
            on:invalid={validate}
        >
          <div class="w-1/2 px-2 mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="firstName">Firstname</label>
            <input class="form-input" id="firstName" type="text" placeholder={$user.firstName} required>
          </div>
          <div class="w-1/2 px-2 mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="lastName">Lastname</label>
            <input class="form-input" id="lastName" type="text" placeholder={$user.lastName} required>
          </div>
          <div class="px-2 ml-auto">
            <button class="form-btn secondary" type="button" on:click={() => accountName.show()}>Cancel</button>
            <button class="form-btn primary" type="submit">Confirm</button>
          </div>
        </form>
      </Option>
      <Option
          bind:this={accountEmail}
          icon="email"
          title="Email address"
          data={$user.email}
          description="This is the email address linked to your account"
          {disabled}
          on:showDetail={disableOthers}
      >
        <form
            class="flex flex-wrap w-full md:w-4/5 mx-auto"
            on:submit|preventDefault={e => handleSubmit(e, accountEmail)}
            on:invalid={validate}
        >
          <div class="w-1/2 px-2 mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="email">Email address</label>
            <input class="form-input" id="email" type="text" placeholder={$user.email} required>
          </div>
          <div class="w-1/2 mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="passwordCheck">Password</label>
            <input class="form-input" id="passwordCheck" type="password" placeholder="***********" required>
            <p class="text-red-400 text-xs italic">Please enter your password.</p>
          </div>
          <div class="px-2 ml-auto">
            <button class="form-btn secondary" type="button" on:click={() => accountEmail.show()}>Cancel</button>
            <button class="form-btn primary" type="submit">Confirm</button>
          </div>
        </form>
      </Option>
      <Option
          icon="lock"
          title="Password"
          data="*************"
          description="Some description here"
          {disabled}
          on:showDetail={disableOthers}
      >
        <div>
          <span>this is a slot</span>
        </div>
      </Option>
    </div>
  </div>

  <!-- HEALTHCARE DATA 93.10.16-201.81 -->
  <div class="w-full md:w-1/4 pr-4 pb-4">
    <div class="text-3xl font-semibold text-green-400">Customer data</div>
    <hr class="w-16 border-t-2 border-green-400 my-2">
    <p class="text-gray-600">Some text here</p>
  </div>
  <div class="w-full md:w-3/4 pb-6">
    <div class="card bg-white">
      <Option
          icon=""
          title=""
          data=""
          {disabled}
          on:showDetail={disableOthers}
      >
        slot
      </Option>
    </div>
  </div>

  <!-- ADDRESS - TELEPHONE - EMAIL -->
  <div class="w-full md:w-1/4 pr-4 pb-4">
    <div class="text-3xl font-semibold text-green-400">Contact details</div>
    <hr class="w-16 border-t-2 border-green-400 my-2">
    <p class="text-gray-600">We can contact you with this information.</p>
  </div>
  <div class="w-full md:w-3/4 pb-6">
    <div class="card bg-white">
      <Option
          icon="home"
          title="Address"
          data={completeAddress}
          description="Some description here"
          {disabled}
          on:showDetail={disableOthers}
      >
        slot
      </Option>
      <Option
          icon="phone"
          title="Telephone"
          data={$user.telephone}
          description="Some description here"
          {disabled}
          on:showDetail={disableOthers}
      >
        slot
      </Option>
      <Option
          icon="contact_mail"
          title="Contact email address"
          data={$user.contactEmail}
          description="Some description here"
          {disabled}
          on:showDetail={disableOthers}
      >
        slot
      </Option>
    </div>
  </div>

  <!-- OPT-INS -->
  <div class="w-full md:w-1/4 pr-4 pb-4">
    <div class="text-3xl font-semibold text-green-400">Data usage</div>
    <hr class="w-16 border-t-2 border-green-400 my-2">
    <p class="text-gray-600">Let us know which information we can send you.</p>
  </div>
  <div class="w-full md:w-3/4 pb-6">
    <div class="card bg-white">
      <div class="flex items-start relative min-h-[6rem] px-8 py-3 border-b border-gray-200">
        <span class="text-gray-400 material-icons-outlined md-40 my-2 mr-6">drafts</span>
        <div class="mr-auto pt-2">
          <div class="text-gray-500">Some opt-in</div>
          <span class="block font-semibold">Nothing here</span>
        </div>
        <span class="w-48 text-sm text-gray-500 mt-2 mr-24">Some description here {$user.optIn1}</span>
        <input type="checkbox" bind:checked={$user.optIn1} class="switch">
      </div>
    </div>
  </div>

  <!-- REMOVE ACCOUNT -->
  <div class="w-full md:w-1/4 pr-4 pb-4">
    <div class="text-3xl font-semibold text-red-400">Remove account</div>
    <hr class="w-16 border-t-2 border-red-400 my-2">
    <p class="text-gray-600">Only remove your account if you don't want to make use of My HUBBLE in the future.</p>
  </div>
  <div class="w-full md:w-3/4">
    <div class="card bg-white border-red-400">
      <div class="flex items-start min-h-[6rem] px-8 py-3 border-b border-gray-200">
        <span class="material-icons-outlined md-40 text-gray-400 my-2 mr-6">delete</span>
        <div class="mt-2 mr-auto">
          <div class="font-semibold">Remove account</div>
          <span class="block text-sm text-gray-500">
            Once you delete your account, there is no going back. Please be certain.
          </span>
        </div>
        <button
            on:click={() => alert('Your account is removed')}
            type="button"
            class="font-semibold uppercase py-1 px-2 mt-3 hover:text-red-400"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</div>
