[bits 16]    ; use 16 bits
[org 0x7c00] ; sets the start address

mov ax,0x0002
int 0x10

times 510-($-$$) db 0           ; fill the output file with zeroes until 510 bytes are full
dw 0xaa55                       ; magic number that tells the BIOS this is bootable