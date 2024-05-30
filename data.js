  // Winbox JS
  import WinBox from "./node_modules/winbox/src/js/winbox";

export const bootup = ["[0.000000] Booting Parrot OS 5.0 - Security Edition", "[0.000000] Initializing cgroup subsys cpuset", "[0.000000] Initializing cgroup subsys cpu", "[0.000000] Initializing cgroup subsys cpuacct", "[0.000000] Linux version 5.10.0-13parrot1-amd64 (root@parrot) (gcc version 10.2.1 20210110 (Parrot 10.2.1-6), GNU ld (GNU Binutils for Parrot) 2.35.1) #1 SMP Debian 5.10.106-1 (2022-04-23)", "[0.000000] Command line: BOOT_IMAGE=/boot/vmlinuz-5.10.0-13parrot1-amd64 root=UUID=12345678-9abc-def0-1234-56789abcdef0 ro quiet splash", "[0.000000] KERNEL supported cpus:", "[0.000000]   Intel GenuineIntel", "[0.000000]   AMD AuthenticAMD", "[0.000000] Disabled fast string operations", "[0.000000] x86/fpu: Supporting XSAVE feature 0x001: 'x87 floating point registers'", "[0.000000] x86/fpu: Supporting XSAVE feature 0x002: 'SSE registers'", "[0.000000] x86/fpu: Supporting XSAVE feature 0x004: 'AVX registers'", "[0.000000] x86/fpu: xstate_offset[2]:  576, xstate_sizes[2]:  256", "[0.000000] BIOS-provided physical RAM map:", "[0.000000] BIOS-e820: [mem 0x0000000000000000-0x000000000009ffff] usable", "[0.000000] BIOS-e820: [mem 0x0000000000100000-0x000000001fffffff] usable", "[0.000000] BIOS-e820: [mem 0x0000000020000000-0x000000002fffffff] reserved", "[0.000000] efi: EFI v2.70 by American Megatrends", "[0.000000] efi: ACPI=0x7b5bf000 ACPI 2.0=0x7b5bf014 SMBIOS=0x7bc53000 MEMATTR=0x764ad018", "[0.000000] efi: NOT enabling secure boot; Secure Boot not supported", "[0.000000] DMI: Parrot Security Virtual Machine/Parrot Security Virtual Machine, BIOS 1.0 04/01/2014", "[0.000000] tsc: Fast TSC calibration using PIT", "[0.000000] tsc: Detected 3192.746 MHz processor", "[0.000000] e820: update [mem 0x00000000-0x00000fff] usable ==> reserved", "[0.000000] e820: remove [mem 0x000a0000-0x000fffff] usable", "[0.000000] AGP: No AGP bridge found", "[0.000000] last_pfn = 0x1ffff max_arch_pfn = 0x400000000", "[0.000000] MTRR default type: uncachable", "[0.000000] MTRR fixed ranges enabled:", "[0.000000]   00000-9FFFF write-back", "[0.000000]   A0000-BFFFF write-through", "[0.000000]   C0000-CFFFF write-protect", "[0.000000]   D0000-DFFFF uncachable", "[0.000000]   E0000-FFFFF write-protect", "[0.000000] MTRR variable ranges enabled:", "[0.000000]   0 base 000000000000 mask 7FFF80000000 write-back", "[0.000000]   1 base 000080000000 mask 7FFFC0000000 write-back", "[0.000000]   2 base 0000C0000000 mask 7FFFE0000000 write-back", "[0.000000]   3 base 0000E0000000 mask 7FFFF0000000 write-back", "[0.000000]   4 disabled", "[0.000000]   5 disabled", "[0.000000]   6 disabled", "[0.000000]   7 disabled", "[0.000000] x86/PAT: Configuration [0-7]: WB  WC  UC- UC  WB  WC  UC- UC  ", "[0.000000] found SMP MP-table at [mem 0x000fcd40-0x000fcd4f]", "[0.000000] check: Scanning 1 areas for low memory corruption", "[0.000000] Secure boot could not be determined", "[0.000000] RAMDISK: [mem 0x3661e000-0x373eafff]", "[0.000000] ACPI: Early table checksum verification disabled", "[0.000000] ACPI: RSDP 0x000000007B5BF000 000024 (v02 PARROT)", "[0.000000] ACPI: XSDT 0x000000007B5BF118 0000C4 (v01 PARROT PARROT 00000001      01000013)", "[0.000000] ACPI: FACP 0x000000007B5E3000 000114 (v06 PARROT PARROT 00000001      01000013)", "[0.000000] ACPI: DSDT 0x000000007B5E3188 00FDD1 (v02 PARROT PARROT 00000000 INTL 20190509)", "[0.000000] ACPI: FACS 0x000000007B5C8000 000040", "[0.000000] ACPI: APIC 0x000000007B5E4000 0000BC (v04 PARROT PARROT 00000001      01000013)", "[0.000000] ACPI: FPDT 0x000000007B5E5000 000044 (v01 PARROT PARROT 00000001      01000013)", "[0.000000] ACPI: MCFG 0x000000007B5E6000 00003C (v01 PARROT PARROT 00000001      01000013)", "[0.000000] ACPI: SSDT 0x000000007B5E7000 00002C (v01 PARROT PARROT 00000001 INTL 20190509)", "[0.000000] ACPI: SSDT 0x000000007B5E8000 00002C (v01 PARROT PARROT 00000001 INTL 20190509)", "[0.000000] ACPI: SSDT 0x000000007B5E9000 00002C (v01 PARROT PARROT 00000001 INTL 20190509)", "[0.000000] ACPI: SSDT 0x000000007B5EA000 00002C (v01 PARROT PARROT 00000001 INTL 20190509)", "[0.000000] ACPI: SSDT 0x000000007B5EB000 00002C (v01 PARROT PARROT 00000001 INTL 20190509)", "[0.000000] ACPI: SSDT 0x000000007B5EC000 00002C (v01 PARROT PARROT 00000001 INTL 20190509)", "[0.000000] ACPI: SSDT 0x000000007B5ED000 00002C (v01 PARROT PARROT 00000001 INTL 20190509)", "[0.000000] ACPI: SSDT 0x000000007B5EE000 00002C (v01 PARROT PARROT 00000001 INTL 20190509)", "[0.000000] ACPI: Reserving FACP table memory at [mem 0x7b5e3000-0x7b5e3113]", "[0.000000] ACPI: Reserving DSDT table memory at [mem 0x7b5e3188-0x7b5f2f58]", "[0.000000] ACPI: Reserving DSDT table memory at [mem 0x7b5e3188-0x7b5f2f58]", "[0.000000] Secure Boot not enabled", "[1.234567] Kernel command line: BOOT_IMAGE=/boot/vmlinuz-5.10.0-13parrot1-amd64 root=UUID=12345678-9abc-def0-1234-56789abcdef0 ro quiet splash cryptdevice=UUID=abcdef12-3456-7890-abcd-ef1234567890:cryptroot", "[1.345678] Initializing cryptographic API", "[1.456789] alg: No test for seqiv (seqiv-generic)", "[1.567890] Loading LUKS encryption module", "[1.678901] device-mapper: uevent: version 1.0.3", "[1.789012] device-mapper: ioctl: 4.43.0-ioctl (2022-01-30) initialised: dm-devel@redhat.com", "[1.900123] dm-crypt: discovered valid TRIM support", "[2.012345] cryptsetup: cryptroot set up successfully", "[2.123456] Asking for password to unlock the encrypted drive", "[3.234567] Please enter passphrase for disk UUID=abcdef12-3456-7890-abcd-ef1234567890: ", "[5.345678] Setting up dm-crypt mapping for device", "[6.456789] device-mapper: table: 254:0: crypt: Cipher aes-xts-plain64, key size: 512 bits", "[7.567890] device-mapper: crypt: successfully allocated crypt context for target", "[8.678901] device-mapper: table: 254:0: crypt: using hardware encryption support", "[9.789012] device-mapper: table: 254:0: crypt: device decrypted and ready", "[10.123456] Device UUID=abcdef12-3456-7890-abcd-ef1234567890 successfully decrypted", "[11.234567] Finished decrypting drive", "[12.345678] Loading initial ramdisk", "[13.456789] Freeing unused decrypted memory: 256K", "[14.567890] Mounting root filesystem", "[15.678901] EXT4-fs (dm-0): mounted filesystem with ordered data mode. Opts: (null)", "[16.789012] VFS: Mounted root (ext4 filesystem) on device 254:0.", "[17.123456] devtmpfs: mounted", "[18.234567] Freeing unused kernel image memory: 2048K", "[19.345678] Write protecting the kernel read-only data: 16384k", "[20.456789] Freeing unused kernel init memory: 1024K", "[21.567890] Freeing unused kernel core memory: 4096K", "[22.678901] Starting systemd: version 247.3-6parrot1", "[23.789012] random: systemd: uninitialized urandom read (16 bytes read)", "[24.123456] random: systemd: uninitialized urandom read (16 bytes read)", "[25.234567] random: systemd: uninitialized urandom read (16 bytes read)", "[26.345678] systemd[1]: Inserted module 'autofs4'", "[27.456789] systemd[1]: Mounting POSIX Message Queue File System...", "[28.567890] systemd[1]: Mounting Kernel Debug File System...", "[29.678901] systemd[1]: Started Dispatch Password Requests to Console Directory Watch.", "[30.789012] systemd[1]: Starting Journal Service...", "[31.123456] systemd[1]: Starting Load Kernel Modules...", "[32.234567] systemd[1]: Mounting Kernel Configuration File System...", "[33.345678] systemd[1]: Starting Apply Kernel Variables...", "[34.456789] systemd[1]: Mounted POSIX Message Queue File System.", "[35.567890] systemd[1]: Mounted Kernel Debug File System.", "[36.678901] systemd[1]: Mounted Kernel Configuration File System.", "[37.789012] systemd[1]: Finished Apply Kernel Variables.", "[38.123456] systemd[1]: Started Journal Service.", "[39.234567] systemd-journald[200]: Received request to flush runtime journal from PID 1", "[40.345678] systemd-journald[200]: File /var/log/journal/abcdef1234567890/system.journal corrupted or uncleanly shut down, renaming and replacing.", "[41.456789] systemd[1]: Started Flush Journal to Persistent Storage.", "[42.567890] systemd[1]: Reached target Local File Systems (Pre).", "[43.678901] systemd[1]: Reached target Local File Systems.", "[44.789012] systemd[1]: Starting Create Volatile Files and Directories...", "[45.123456] systemd[1]: Starting Security Auditing Service...", "[46.234567] systemd[1]: Starting Load/Save Random Seed...", "[47.345678] systemd[1]: Finished Create Volatile Files and Directories.", "[48.456789] systemd[1]: Finished Load/Save Random Seed.", "[49.567890] systemd[1]: Started Security Auditing Service.", "[50.678901] systemd[1]: Reached target System Initialization.", "[51.789012] systemd[1]: Listening on D-Bus System Message Bus Socket.", "[52.123456] systemd[1]: Reached target Sockets.", "[53.234567] systemd[1]: Reached target Basic System.", "[54.345678] systemd[1]: Starting Login Service...", "[55.456789] systemd[1]: Started Daily Cleanup of Temporary Directories.", "[56.567890] systemd[1]: Reached target Timers.", "[57.678901] systemd[1]: Reached target Paths.", "[58.789012] systemd[1]: Started D-Bus System Message Bus.", "[59.123456] systemd[1]: Started Login Service.", "[60.234567] systemd[1]: Starting User Manager for UID 1000...", "[61.345678] systemd[1]: Started User Manager for UID 1000.", "[62.456789] systemd[1]: Reached target User and Group Name Lookups.", "[63.567890] systemd[1]: Reached target User Manager.", "[64.678901] systemd[1]: Started Session c1 of user envoh.", "Welcome to Parrot OS 5.0 - Security Edition", " ~ Icons By https://icons8.com ~ ", " ~ Type \x1B[1;3;31mhelp\x1B[0m for a list of available commands ~ ", "┌─[✗]─[\x1B[1;3;31menvoh\x1B[0m@parrot]─[\x1B[1;3;31m~\x1B[0m]\r\n└──╼ $ "];

export const applications = {
    'blog': "Personal Blog Using Obsidian, SyncThing and Quartz"
}

export const commands = {
    'icons': {
        'hint': "Icons By https://icons8.com Go Show Them A Visit",
        'response': 'Thankyou for checking out icons8,\r\n their icons add to the feel of the operating design and bring it to life.',
        'function': () => {
            window.open("https://icons8.com", '_blank').focus();
        },
    },
    'help': {
        'hint': "Displays a list of available commands",
        'function': () => {
            window.terminal.write("\r\n")
            let cmds = Object.keys(commands)
            for (let cmd of cmds) {
                if ('hint' in commands[cmd]) {
                    window.terminal.write(`\x1B[1;3;31m[${cmd}]\x1B[0m ${commands[cmd].hint}\r\n`)
                }
            }
            terminal.write(`${user_meta}`)
            window.curr_line = ""
        }
    },
    'clear': {
        'hint': "Clears The Terminal",
        'function': () => {
            
            window.terminal.write(`\r\n┌─[✗]─[\x1B[1;3;31menvoh\x1B[0m@parrot]─[\x1B[1;3;31m${window.directory}\x1B[0m]`)
            window.curr_line = "" 
            window.terminal.clear()
            window.terminal.write(`\r\n└──╼ $ `)
         }
    },
    'whoami': {
        'response': "Oliver Mark Harris <dev@olivermharris.co.uk>"
    },
    'open': {
        'hint': "Opens an application, type open for a list of available applications",
        'function': () => {
            window.terminal.write("\r\n")
            let apps = Object.keys(applications)
            for (let app of apps) {
                window.terminal.write(`[${app}] ${applications[app]}\r\n`)
            }
            window.terminal.write(`${user_meta}`)
            window.curr_line = ""
        }
    },
    'open blog': {
        'response' : "",
        'function': () => {
            new WinBox({
                title: "Blog",
                maxHeight: 400,
                maxWudth: 600,
                top: "5%",
                right: 5,
                bottom: "10%",
                left: 5,
                background: "#252b4e",
                url: "https://olivermharris.co.uk/blog",
            });
        }
    }
}