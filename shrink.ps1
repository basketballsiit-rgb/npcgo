Add-Type -AssemblyName System.Drawing
$imagePath = "C:\xampp\htdocs\npcgo\public\college_logo_small.png"
$image = [System.Drawing.Image]::FromFile($imagePath)
$newImage = New-Object System.Drawing.Bitmap(300, 300)
$graphics = [System.Drawing.Graphics]::FromImage($newImage)
$graphics.DrawImage($image, 0, 0, 300, 300)
$newImage.Save("C:\xampp\htdocs\npcgo\public\college_logo_tiny.png", [System.Drawing.Imaging.ImageFormat]::Png)
$image.Dispose()
$newImage.Dispose()
$graphics.Dispose()
Write-Host "Success"
