Add-Type -AssemblyName System.Drawing
try {
    $imagePath = "C:\xampp\htdocs\npcgo\public\npc_logo_final_2026.png"
    $image = [System.Drawing.Image]::FromFile($imagePath)
    $newImage = New-Object System.Drawing.Bitmap($image.Width, $image.Height)
    $graphics = [System.Drawing.Graphics]::FromImage($newImage)
    $graphics.Clear([System.Drawing.Color]::White)
    $graphics.DrawImage($image, 0, 0, $image.Width, $image.Height)
    $destPath = "C:\xampp\htdocs\npcgo\public\npc_logo_web.jpg"
    $newImage.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    
    $image.Dispose()
    $newImage.Dispose()
    $graphics.Dispose()
    Write-Host "SUCCESS_CONVERT"
} catch {
    Write-Host "ERROR: $($_.Exception.Message)"
}
