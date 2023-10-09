<script>
  /** @type {'success'|'info'|'warning'|'error'} */
  export let severity = 'success';

  $: if (!['success','info','warning','error'].includes(severity)) {
    throw new Error('Invalid severity on \'Alert\' component');
  }

  function severityClasses() {
    return {
      error: 'bg-error-50 text-error-400 border-error-400',
      warning: 'bg-warning-50 text-warning-400 border-warning-400',
      info: 'bg-info-50 text-info-400 border-info-400',
      success: 'bg-success-50 text-success-400 border-success-400',
    }[severity]
  }

  function severityIcon() {
    return {
      error: 'error_outline',
      warning: 'warning_amber',
      info: 'info',
      success: 'check_circle', // task_alt
    }[severity]
  }
</script>

<div class="flex items-center px-8 py-6 border-l-4 {severityClasses()}">
  <span class="material-icons-outlined md-40 my-2 mr-6">{severityIcon()}</span>
  <div class="text-2xl font-bold"><slot></slot></div>
</div>
