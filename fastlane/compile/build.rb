desc "Increment both projects"
lane :increment_build do |options|
  increment_build_number(
    build_number: options[:build_number],
    xcodeproj: ENV["IOS_PROJECT"]
  )
  increment_version_code(
    gradle_file_path: ENV["ANDROID_GRADLE"]
  )
end

desc "Deploy a new version to iTunes Connect"
lane :itunes_connect do |options|
  dry = options[:dry] || false
  path = ENV["IOS_PROJECT"],
  match(
    type: "appstore",
    git_url: "ENV["CERTIFICATES_REPO_URL"]"
  )
  if !dry
    increment_build
  end
  disable_automatic_code_signing(path: path)
  gym(
    project: path,
    scheme: ENV["IOS_SCHEME"],
    configuration: ENV["IOS_CONFIGURATION_RELEASE"],
    export_method: "app-store",
  )
  # itunes_connect
end

desc "Deploy a new version to Google Play"
lane :play_store do
  UI.header "Choose Google Play Track"
  track = UI.select("You need to provide a track to use on Google Play: ", ["production", "beta", "alpha", "internal", "rollout"])
  if UI.confirm("Are you sure you want to ship to Google Play '#{track}'?")
    gradle(
      task: ENV["ANDROID_CLEAN_TASK"],
      project_dir: ENV["ANDROID_DIR"]
    )
    increment_build
    gradle(
      task: ENV["ANDROID_BUILD_TASK"],
      build_type: ENV["ANDROID_BUILD_TYPE_RELEASE"],
      project_dir: ENV["ANDROID_DIR"]
    )
    supply(
      track: track,
    )
  else
  end
end

