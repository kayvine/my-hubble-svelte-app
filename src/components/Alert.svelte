<script>
  export let severity = 'success';

  function severityClasses() {
    return {
      error: 'bg-red-50 text-red-400 border-red-400',
      warning: 'bg-yellow-50 text-yellow-400 border-yellow-400',
      info: 'bg-blue-50 text-blue-400 border-blue-400',
      success: 'bg-info-50 text-info-400 border-info-400',
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
