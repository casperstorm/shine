desc "Fetch all certificates and provisioning profiles"
lane :codesigning do |options|
  admin = options[:admin] || false

  if admin
    username = options[:username] || prompt(text: "Please enter your Apple Developer Portal username:")
  else
    username = CredentialsManager::AppfileConfig.try_fetch_value(:apple_id)
  end

  ["development", "adhoc", "appstore"].each do |type|
    match(
      git_url: ENV["CERTIFICATES_REPO_URL"],
      username: username,
      type: type,
      readonly: !admin,
      force_for_new_devices: admin,
    )
  end
end
